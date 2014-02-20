export default DS.Model.extend({
  title: DS.attr('string'),
  post: DS.hasMany('post')
});