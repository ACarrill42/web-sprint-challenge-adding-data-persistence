// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResources() {
  return db('resources')
}

async function getById(id) {
  const resource = await db('resource').where({id}).first()

  return resource
}

async function createResources(created) {
  const [id] = await db('resources').insert(created)

  return getResources(id)
}

module.exports = {getResources, getById, createResources}