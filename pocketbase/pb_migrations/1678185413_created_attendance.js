migrate((db) => {
  const collection = new Collection({
    "id": "irhw35dwwvabxr7",
    "created": "2023-03-07 10:36:53.734Z",
    "updated": "2023-03-07 10:36:53.734Z",
    "name": "attendance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fjonad9o",
        "name": "nim",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "u1ixiick",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sbcfwruo",
        "name": "url",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("irhw35dwwvabxr7");

  return dao.deleteCollection(collection);
})
