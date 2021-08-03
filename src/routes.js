const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userController')
const projectController = require('./controllers/projectController')


routes
//Users
    .get('/users', userController.index)
    .post('/users', userController.create)
    .put('/users/:id', userController.update)
    .delete('/users/:id', userController.delete)
    //Projects
    .get('/projects', projectController.index)
    .post('/projects', projectController.create)

module.exports = routes