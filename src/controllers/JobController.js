const Profile = require('../models/Profile')
const Job = require('../models/Job')
const remainingDays = require('../utils/remainingDays')
const calculateBudget = require('../utils/calculateBudget')

module.exports = {

  async save(req, res) {
    const jobs = await Job.get()
    const { name, dailyHours, totalHours } = req.body
    await Job.create({
      name,
      dailyHours,
      totalHours,
      createdAt: Date.now()
    })
    return res.redirect('/')
  },
  async show(req, res) {
    const jobs = await Job.get()
    const profile = await Profile.get()
    const { id } = req.params
    const job = jobs.find(job => Number(job.id) === Number(id))
    if(!job) {
      return res.send('Job not found!')
    }
    job.budget = calculateBudget(profile.valueHour, job.totalHours)
    return res.render('job-edit', { job })
  },
  async update(req, res) {
    const { id } = req.params

    const { name, totalHours, dailyHours } = req.body
    const updatedJob = {
      name,
      totalHours,
      dailyHours
    }

    await Job.update(updatedJob, id)

    res.redirect('/job/' + id)
  },
  async delete(req, res) {
    const { id } = req.params
    await Job.delete(id)
    return res.redirect('/')
  },
  create(req, res) {
    return res.render('job.ejs')
  }
}
