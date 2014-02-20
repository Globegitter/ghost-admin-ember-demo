var Tag =  DS.Model.extend({
  uuid: DS.attr('string'),
  name: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string'),
  parent_id: DS.attr('number'),
  meta_titel: DS.attr('string'),
  meta_description: DS.attr('string'),
  created_at: DS.attr('string'),
  created_by: DS.attr('number'),
  updated_at: DS.attr('string'),
  updated_by: DS.attr('number'),
});

Tag.FIXTURES = [{
  "id": 1,
  "uuid": "406edaaf-5b1c-4199-b297-2af90b1de1a7",
  "name": "Getting Started",
  "slug": "getting-started",
  "description": null,
  "parent_id": null,
  "meta_title": null,
  "meta_description": null,
  "created_at": "2014-02-15T20:02:01.000Z",
  "created_by": 1,
  "updated_at": "2014-02-15T20:02:01.000Z",
  "updated_by": 1
}];

export default Tag;