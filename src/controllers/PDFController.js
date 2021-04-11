const pdf = require('html-pdf')
const Job = require('../models/Job')

module.exports = {
  create(req, res) {
    const { id } = req.params
    const job = Job.getOne(id)
    const content = `
    <table width="467" border="1px">
      <tr>
        <td width="101" height="40">Nome do Projeto</td>
        <td width="113">Horas diárias</td>
        <td width="140">Total de horas</td>
        <td width="85">Criado em</td>
      </tr>
      <tr>
        <td height="40">${job.name}</td>
        <td>${job.dailyHours}</td>
        <td>${job.totalHours}</td>
        <td>${job.createdAt}</td>
      </tr>
    </table>
    `
    pdf.create(content, {})
      .toFile(`../../pdfs/${job.name}.pdf`, (err, response) => {
        if(err) {
          console.log('Ocorreu um erro!')
        } else {
          console.log(res)
        }
      })
  }
}
