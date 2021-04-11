const Profile = require('../models/Profile')
const Job = require('../models/Job')
const remainingDays = require('../utils/remainingDays')
const calculateBudget = require('../utils/calculateBudget')

module.exports = {
  async index(req, res) {
    const jobs = await Job.get()
    const profile = await Profile.get()
    ket statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    }
    let jobTotalHours = 0
    const updatedJobs = jobs.map((job) => {
      const remaining = remainingDays(job)
      const status = remaining <= 0 ? 'done' : 'progress'
      statusCount[status] += 1
      jobTotalHours = status == 'progress') ? jobTotalHours += Number(job.dailyHours) : jobTotalHours

      return {
        ...job
        remaining,
        status,
        budget: calculateBudget(profile.valueHour, job.totalHours)
      }
    })

    const freeHours = profile.hoursPerDay - jobTotalHours
    return res.render('index.ejs', { jobs: updatedJobs, profile, statusCount, freeHours })
  },
}
