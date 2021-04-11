const Profile = require('../models/Profile')
const remainingDays = require('../utils/remainingDays')
const calculateBudget = require('../utils/calculateBudget')

module.exports = {
    async index(req, res) {
      return res.render('profile.ejs', { profile: await Profile.get() })
    },
    async update(req, res) {

      const { monthlyBudget, vacationPerYear, daysPerWeek, hoursPerDay } = req.body
      let { valueHour } = req.body
      const weeksPerYear = 52
      const weeksPerMonth = (weeksPerYear - vacationPerYear) / 12
      const weekTotalHours = hoursPerDay + daysPerWeek
      const monthlyTotalHours = weekTotalHours * weeksPerMonth
      valueHour = monthlyBudget/monthlyTotalHours
      const profile = await Profile.get()
      await Profile.update({
        ...profile,
        ...req.body,
        valueHour
      })

      return res.redirect('/profile')
    }
  }
