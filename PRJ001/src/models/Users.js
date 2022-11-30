const sequelize = require("../util/database")
const {DataTypes} = require("sequelize");

const users = sequelize.define("users",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        notNull: true,
        primaryKey: true
    },
    name:DataTypes.STRING,
    email: DataTypes.STRING,
})

module.exports = users