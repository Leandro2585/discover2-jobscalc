const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
  name: 'Leandro Real',
  avatar: 'https://avatars.githubusercontent.com/u/49343139?v=4',
  monthlyBudget: 2300,
  daysPerWeek: 6,
  hoursPerDay: 8,
  vacationPerYear: 2
}

routes.get('/', (req, res) => {
  return res.render(views + 'index.ejs')
})

routes.get('/job', (req, res) => {
  return res.render(views + 'job.ejs')
})

routes.get('/job/edit', (req, res) => {
  return res.render(views + 'job-edit.ejs')
})

routes.get('/profile', (req, res) => {
  return res.render(views + 'profile.ejs', { profile })
})

module.exports = routes
