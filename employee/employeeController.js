var employeeService = require('./employeeService');

module.exports.getEmployees = (req, res) => {
    employeeService.getEmployees().then(results =>
        res.end(JSON.stringify(results)))
}