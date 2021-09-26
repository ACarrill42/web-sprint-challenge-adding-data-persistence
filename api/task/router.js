// build your `/api/tasks` router here
const express = require('express');
const tasks = require('./model');

const router = express.Router();

router.get('/tasks', (req, res, next) => {
  tasks.getTask()
    .then(tasks => {
      tasks.forEach(task => {
        if(task.task_completed === 1) {
            task.task_completed = true
        } else {
            task.task_completed = false
        }
    });

    res.json(tasks)
    })
    .catch(next)
})

router.post('/tasks', (req, res, next) => {
  tasks.createTasks(req.body)
    .then(task => {
      res.json(task)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json()
})
module.exports = router;