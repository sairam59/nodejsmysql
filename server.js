// Individual connection
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123Root@',
//     port: 3306
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });
// // Create
// connection.query("INSERT INTO `test`.`employee` (`name`,`salary`) VALUES ('Aaradhya',500000)", (err, results, fields) => {
//     if (err) throw err;
//     else {
//         console.log("************Employee Created***************");
//         // console.log(results);
//         console.log(results.insertId);
//         // console.log(fields);
//     }
// });

// // Read
// connection.query("SELECT `employee`.`empid`, `employee`.`name`, `employee`.`salary` FROM  `test`.`employee`", (err, results, fields) => {
//     if (err) throw err;
//     else {
//         // console.log(res); // Debugging Purpose
//         console.log("***************Employee Details retrieved***************");
//         console.log(results);
//         // console.log(fields);
//     }
// });
// // Update
// connection.query("UPDATE `test`.`employee` SET `salary` = 1000002 WHERE `empid` = 1000", (err, results, fields) => {
//     if (err) throw err;
//     else {
//         console.log("***************Employee Updated successfully***************");
//         // console.log(results);
//         console.log('Changed ' + results.changedRows + ' rows');
//     }
// });
// // Delete
// connection.query("DELETE FROM `test`.`employee` WHERE `empid` = 1002", (err, results) => {
//     if (err) throw err;
//     else {
//         console.log("***************Employee deleted successfully***************");
//         console.log('Deleted ' + results.affectedRows + ' rows');
//     }
// });

// ***********************Connection Pool

var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123Root@',
    database: 'test',
    port: 3306
});
// CRUD Operations
pool.getConnection((err, connection) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    // console.log(connection);
    // Create
    connection.query("INSERT INTO `test`.`employee` (`name`,`salary`) VALUES ('Aaradhya',500000)", (err, results, fields) => {
        if (err) throw err;
        else {
            console.log("Employee Created");
            // console.log(results);
            console.log(results.insertId);
            // console.log(fields);
        }
    });
    // Read
    connection.query("SELECT `employee`.`empid`, `employee`.`name`, `employee`.`salary` FROM  `test`.`employee`", (err, results, fields) => {
        if (err) throw err;
        else {
            // console.log(res); // Debugging Purpose
            console.log("Employee Details retrieved");
            console.log(results);
            console.log(results[0].empid);
            // console.log(fields);
        }
    });
    // Update
    connection.query("UPDATE `test`.`employee` SET `salary` = 321223 WHERE `empid` = 1010 ", (err, results, fields) => {
        if (err) throw err;
        else {
            console.log("***************Employee Updated successfully***************");
            // console.log(results);
            console.log('Changed ' + results.changedRows + ' rows');
        }
    });
    // Delete
    connection.query("DELETE FROM `test`.`employee` WHERE `empid` = 1004", (err, results) => {
        if (err) throw err;
        else {
            console.log("***************Employee deleted successfully***************");
            console.log('Deleted ' + results.affectedRows + ' rows');
        }
    });
    pool.end(function (err) {
        // all connections in the pool have ended
        console.log("Connections closed successfully");
    });
})

// Read
//     connection.query("SELECT `employee`.`empid`, `employee`.`name`, `employee`.`salary` FROM  `test`.`employee`", (err, results, fields) => {
//         if (err) throw err;
//         else {
//             // console.log(res); // Debugging Purpose
//             console.log("Employee Details retrieved");
//             console.log(results);
//             console.log(fields);
//         }
//     });
//     // Update
//     connection.query("INSERT INTO `test`.`employee` (`name`,`salary`) VALUES ('Aaradhya',500000)", (err, results, fields) => {
//         if (err) throw err;
//         else {
//             console.log('Changed ' + results.changedRows + ' rows');
//             console.log("Employee Created successfully");
//         }
//     });
//     // Delete
//     connection.query("DELETE FROM `test`.`employee` WHERE `empid` = 1002", (err, res) => {
//         if (err) throw err;
//         else {
//             console.log('Deleted ' + results.affectedRows + ' rows');
//             console.log("Employee deleted successfully");
//         }
//     });

