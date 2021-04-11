const Database = require('./config')

const initDB = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE profile(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthlyBudget INT,
      daysPerWeek INT,
      hoursPerDay INT,
      vacationPerYear INT,
      valueHour INT
    )`)

    await db.exec(`CREATE TABLE jobs(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      dailyHours INT,
      totalHours INT,
      createdAt DATETIME
    )`)

    await db.run(`INSERT INTO profile(
      name,
      avatar,
      monthlyBudget,
      daysPerWeek,
      hoursPerDay,
      vacationPerYear,
      valueHour
    ) VALUES (
      'Leandro Real',
      'https://avatars.githubusercontent.com/u/49343139?v=4',
      2300,
      6,
      8,
      2,
      22
    )`)

    await db.run(`INSERT INTO jobs(
      name,
      dailyHours,
      totalHours,
      createdAt
    ) VALUES (
      "Site para Pizzaria",
      5,
      30,
      1617514376018
    )`)

    await db.run(`INSERT INTO jobs(
      name,
      dailyHours,
      totalHours,
      createdAt
    ) VALUES (
      "OneTwo Project",
      2,
      43,
      1617514376018
    )`)

    await db.close()
  }
}

initDB.init()
