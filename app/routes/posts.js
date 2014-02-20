//import ajax from "ghost/utils/ajax";

export default Ember.Route.extend({
  classNames: "manage",

  model: function() {
    //return null;
    return this.store.find('post');
    //return $.ajax("/ghost/api/v0.1/posts");
  },
  
  afterModel: function(posts, transition) {
    if (posts.objectAt(0)) {
      this.transitionTo('post', posts.objectAt(0).get('id'));
    }
  },

  actions: {
    openEditor: function(post) {
      this.transitionTo('editor', post);
    }
  }
});


