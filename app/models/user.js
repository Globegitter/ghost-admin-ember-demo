var User = DS.Model.extend({
  uuid: DS.attr('string'),
  name: DS.attr('string'),
  slug: DS.attr('string'),
  email: DS.attr('string'),
  image: DS.attr('string'),
  cover: DS.attr('string'),
  bio: DS.attr('string'),
  website: DS.attr('string'),
  location: DS.attr('string'),
  accessibility: DS.attr('string'),
  status: DS.attr('string'),
  language: DS.attr('string'),
  meta_title: DS.attr('string'),
  meta_description: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  post: DS.hasMany('post')
});

User.FIXTURES = [{
  "id": 1,
  "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
  "name": "manuel_mitasch",
  "slug": "manuel_mitasch",
  "email": "manuel@cms.mine.nu",
  "image": null,
  "cover": null,
  "bio": null,
  "website": null,
  "location": null,
  "accessibility": null,
  "status": "active",
  "language": "en_US",
  "meta_title": null,
  "meta_description": null,
  "created_at": "2014-02-15T20:02:25.000Z",
  "updated_at": "2014-02-15T20:02:25.000Z"
}];

export default User;