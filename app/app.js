import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'ghost', // TODO: loaded via config
  Resolver: Resolver['default']
});

// needed to add body class depending on current route
Ember.Route.reopen({
  activate: function() {
    var cssClasses = this.get('classNames'),
        rootElement = this.router.namespace.get('rootElement');
    
    if (cssClasses) {
      Ember.run.schedule('afterRender', null, function(){ 
        Ember.$(rootElement).addClass(cssClasses); 
      });
    }
  },
  deactivate: function() {
    var cssClasses = this.get('classNames'),
        rootElement = this.router.namespace.get('rootElement');

    Ember.run.schedule('afterRender', null, function(){ 
      Ember.$(rootElement).removeClass(cssClasses);
    });
  }
});

// A fix for the ember chrome extension so that we can peek into the data store
// see https://github.com/stefanpenner/ember-app-kit/issues/263#issuecomment-28482992
// and https://github.com/tildeio/ember-extension/issues/117
/* global require */
export default DS.DebugAdapter.reopen({
  getModelTypes: function() {
    var self = this;
    return Ember.keys(requirejs._eak_seen).filter(function(key) {
      return !!key.match(/^ghost\/models\//) && self.detect(require(key)['default']);
    }).map(function(key){
      var type = require(key)['default'];
      var typeKey = key.match(/^ghost\/models\/(.*)/)[1];
      type.toString = function() { return typeKey; };
      return type;
    });
  }
});

export default App;
