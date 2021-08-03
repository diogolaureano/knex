const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userController')


routes.get('/users', userController.index)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

module.exports = routes