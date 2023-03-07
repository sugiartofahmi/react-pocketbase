migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irhw35dwwvabxr7")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irhw35dwwvabxr7")

  collection.listRule = null

  return dao.saveCollection(collection)
})
