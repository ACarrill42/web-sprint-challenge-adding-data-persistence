// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects() {
  return db('projects');
}

async function getById(p_id) {
  const project = await db('projects').where({p_id}).first()

  if(project.project_completed === 1) {
    project.project_completed = true
  } else {
    project.project_completed = false
  }

  return project
}

async function createProjects(created) {

  if(created.project_completed === true || created.project_completed === 1) {
    created.project_completed = 1
} else {
    created.project_completed = 0
}
  const [id] = await db('projects').insert(created)

  return getById(id)
}

module.exports = {getProjects, getById, createProjects};