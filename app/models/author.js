import User from "ghost/models/user";

var Author = User.extend();

Author.FIXTURES = [{
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

export default Author;