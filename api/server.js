// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmnet');
const resourcesRouter = require('./resource/router');
const taskRouter = require('./task/router');
const projectRouter = require('./project/router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', resourcesRouter);
server.use('/api', taskRouter);
server.use('/api', projectRouter);


module.exports = server;