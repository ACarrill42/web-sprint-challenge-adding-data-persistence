// build your `/api/projects` router here
const express = require('express');
const projects = require('./model');

const router = express.Router();

router.get('/projects', (req,res,next) => {
  projects.getProjects()
    .then(projects => {
      projects.forEach(project => {
        if(project.project_completed === 1) {
            project.project_completed = true
        } else {
            project.project_completed = false
        }
    })

    res.json(projects)
    })
    .catch(next)
})

router.post('/projects', (req,res,next) => {
  projects.createProjects(req.body)
    .then(project => {
      res.json(project)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json()
})

module.exports = router;