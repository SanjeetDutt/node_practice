const {DataTypes, Sequelize} = require("sequelize")

const sequelize = require("../utilities/sequelize")
const {tableConfig} = require("../utilities/sequelize")
const PrimaryKeyDefinition = require("./_superModels/PrimaryKeyDefinition")

const loginCredentials = sequelize.define("loginCredential",{
    ...PrimaryKeyDefinition,
    hash:{
        field:"hash",
        type: DataTypes.STRING,
        notNull: true,
        unique: true
    },
},{
    ...tableConfig,
    tableName:"login_credentials"
})

module.exports = loginCredentials