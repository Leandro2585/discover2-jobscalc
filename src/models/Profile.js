const Database = require('../database/config')

module.exports = {
  async get() {
    const db = await Database()
    const profile = await db.get(`SELECT * FROM profile`)
    await db.close()
    return profile
  },
  async update(newData) {
    const db = await Database()
    db.run(`UPDATE profile SET
    name = '${newData.name}',
    avatar = '${newData.avatar}',
    monthlyBudget = ${newData.monthlyBudget},
    daysPerWeek = ${newData.daysPerWeek},
    hoursPerDay = ${newData.hoursPerDay},
    vacationPerYear = ${newData.vacationPerYear},
    valueHour = ${newData.valueHour}
    `)
    await db.close()
  }
}
