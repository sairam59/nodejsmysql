create database test;

use test;

CREATE TABLE employee(empid int(11) NOT NULL AUTO_INCREMENT,
    name varchar(50) DEFAULT NULL,
    salary float(11) DEFAULT NULL,
    PRIMARY KEY (empid))
    
INSERT INTO `test`.`employee`
(`name`,
`salary`)
VALUES ('Sairam',
500000);



SELECT 
    `employee`.`empid`, `employee`.`name`, `employee`.`salary`
FROM
    `test`.`employee`;

-- ALTER USER root IDENTIFIED WITH mysql_native_password BY '123Root@';
-- https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123Root@';

-- ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '123Root@';

DELETE FROM `test`.`employee`
WHERE `empid` = 1009;


UPDATE `test`.`employee`
SET
`salary` = 32123
WHERE `empid` = 1010;


