
require("dotenv").config()
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    username:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    host:process.env.MYSQL_HOST,
    dialect:"mysql",
    dialectOptions: {
        connectTimeout: 60000
    }
})


module.exports = sequelize;