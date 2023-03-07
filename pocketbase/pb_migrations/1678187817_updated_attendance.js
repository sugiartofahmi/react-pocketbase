migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irhw35dwwvabxr7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pe81z47m",
    "name": "rated",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irhw35dwwvabxr7")

  // remove
  collection.schema.removeField("pe81z47m")

  return dao.saveCollection(collection)
})
