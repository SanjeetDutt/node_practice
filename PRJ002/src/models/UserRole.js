const sequelize = require("../utilities/sequelize")
const { DataTypes } = require("sequelize")
const {tableConfig} = require("../utilities/sequelize")

const UserRole = sequelize.define("user_roles",{
    name:{
        type: DataTypes.STRING,
        notNull: true,
        unique: true,
        primaryKey: true
    }
},{
    ...tableConfig,
    tableName:"user_roles"
})

module.exports = UserRole