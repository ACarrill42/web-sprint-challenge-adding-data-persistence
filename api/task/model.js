// build your `Task` model here
const db = require('../../data/dbConfig');

function getTask() {
  return db('tasks')
    .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
    .select('task.task_id', 'task.task_description', 'task.task_completed', 'projects.project_name', 'projects.project_description')
}

async function getById(id) {
  const task = await db('tasks').where({id}).first();

  if(task.task_completed === 1) {
    task.task_completed = true
} else {
    task.task_completed = false
}

return task  
}

async function createTasks(created) {

  if(created.task_completed === true || created.task_completed === 1) {
    created.task_completed = 1
} else {
    created.task_completed = 0
}

  const [id] = await db('tasks').insert(created)

  return getById(id)
}

module.exports = {getTask, getById, createTasks};