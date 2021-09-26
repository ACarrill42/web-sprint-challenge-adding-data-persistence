// build your `/api/resources` router here
const express = require('express');
const resources = require('./model')

const router = express.Router();

router.get('/resources', (req,res,next) => {
  resources.getResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
});

router.post('/resources', (req,res,next) => {
  resources.createResources(req.body)
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json()
})

module.exports = router