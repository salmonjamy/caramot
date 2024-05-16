const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize(
        'pure_bliss',
        'root',
        '',
         {
             host: 'localhost',     
             port: 3306,
             dialect: 'mysql' /* one of | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
        })
             
         


module.exports = sequelize 

