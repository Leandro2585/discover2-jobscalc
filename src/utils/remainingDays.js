function remainingDays(job) {
  const remainingDaysInitial = (job.totalHours / job.dailyHours).toFixed();
  const createdDate = new Date(job.createdAt)
  const dueDay = createdDate.getDate() + Number(remainingDaysInitial)
  const dueDateInMs = createdDate.setDate(dueDay)
  const timeDiffInMs = dueDateInMs - Date.now()
  const dayInMs = 1000 * 60 * 60 * 24
  const dayDiff = Math.ceil(timeDiffInMs/dayInMs)
  return dayDiff
}

module.exports = remainingDays
