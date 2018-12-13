var express = require('express');
var app = express();
var employeeController = require('./employee/employeeController');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/biscuits', (req, res) => {
    res.send(['tiger', 'parle']);
})

app.get('/employee/details', (req, res) => {
    res.send({
        'name': "Sai",
        "age": 26,
        "salary": 4213123
    });
})

app.get('/employee/details/db', (req, res) => {
    employeeController.getEmployees(req, res);
})

app.listen(4000, () => {
    console.log('Server Listing in port 4000');
});