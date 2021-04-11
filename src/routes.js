 const express = require('express')
const routes = express.Router()
const JobController = require('./controllers/JobController')
const ProfileController = require('./controllers/ProfileController')
const DashboardController = require('./controllers/DashboardController')

routes.get('/', DashboardController.index)
routes.get('/job/:id', JobController.show)
routes.get('/job', JobController.create)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

routes.post('/job', JobController.save)

module.exports = routes
