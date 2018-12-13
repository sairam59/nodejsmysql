var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123Root@',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

function getEmployees() {
    return new Promise((resolve, reject) => {
        // Read
        connection.query("SELECT `employee`.`empid`, `employee`.`name`, `employee`.`salary` FROM  `test`.`employee`", (err, results, fields) => {
            if (err) throw err;
            else {
                console.log("***************Employee Details retrieved***************");
                console.log(results);
                return resolve(results);
                // console.log(fields);
            }
        });
        connection.end();
    })
}

module.exports = {
    getEmployees: getEmployees
}