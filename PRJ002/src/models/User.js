const { DataTypes } = require("sequelize")

const sequelize = require("../utilities/sequelize")
const EffectiveTimestamp = require("./_superModels/EffectiveTimestamps")
const PrimaryKey = require("./_superModels/PrimaryKeyDefinition")
const {tableConfig} = require("../utilities/sequelize")

const User = sequelize.define("users",{
    ...EffectiveTimestamp,
    ...PrimaryKey,
    firstName:{
        field:"first_name",
        type: DataTypes.STRING,
        notNull: true
    },
    lastName:{
        field: "last_name",
        type: DataTypes.STRING,
        notNull: false
    },
    email:{
        field: "email",
        type: DataTypes.STRING,
        notNull: true,
        unique: true
    },
    password:{
        field: "password",
        type: DataTypes.STRING,
        notNull: true,
    },
},{
    ...tableConfig,
    tableName:"users",
})

module.exports = User