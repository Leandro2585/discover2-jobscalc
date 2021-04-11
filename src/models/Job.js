const Database = require('../database/config')

module.exports ={
  async get() {
    const db = await Database()

    const jobs = await db.all(`SELECT * FROM jobs`)

    await db.close()

    return jobs.map(job => ({
      id: job.id,
        name: job.name,
        dailyHours: job.dailyHours,
        totalHours: job.totalHours,
        createdAt: job.createdAt
    }))
  },
  async update(upadtedJob, id) {
    const db = await Database()
    await db.run(`UPDATE jobs SET
      name = '${updatedJob.name}',
      dailyHours = ${updatedJob.dailyHours},
      totalHours = ${updatedJob.totalHours},
      WHERE id = ${id}
    `)
    await db.close()
  },
  async delete(id) {
    const db = await Database()

    await db.run(`DELETE FROM jobs WHERE id = ${id}`)

    await db.close()
  },
  async create(newJob) {
    const db = await Database()

    await db.run(`INSERT INTO jobs (
      name,
      dailyHours,
      totalHours,
      createdAt
    ) VALUES (
      '${newJob.name}',
      ${newJob.dailyHours},
      ${newJob.totalHours},
      ${newJob.createdAt},
    )`)
    await db.close()
  }
}
