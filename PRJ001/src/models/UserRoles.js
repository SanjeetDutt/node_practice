const sequelize = require("../util/database")
const {DataTypes} = require("sequelize");

const userRoles = sequelize.define("user-roles",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        notNull: true,
        primaryKey: true
    },
    name:DataTypes.STRING,
})

module.exports = userRoles