export default Ember.Route.extend({
  // redirect to first post subroute
  //redirect: function() {
    //console.log(this.modelFor('post'));
  //  var firstPost = this.modelFor('post');
  //  window.console.log('!!!!!!!!');
  //  window.console.log(firstPost);
//
  //  if (firstPost) {
      //this.transitionTo('post', 1);
  //  }
  //}
  afterModel: function(posts, transition) {
    window.console.log('!!!!!!!!'); 
    //window.console.log(posts[0]);  
  }
});