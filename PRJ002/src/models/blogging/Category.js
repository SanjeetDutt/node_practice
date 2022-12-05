const sequelize = require("../../utilities/sequelize")
const {tableConfig} = require("../../utilities/sequelize")
const PrimaryKey = require("../_superModels/PrimaryKeyDefinition");
const {DataTypes} = require("sequelize")

const Category = sequelize.define("categories",{
    ...PrimaryKey,
    name:{
        field:"name",
        type: DataTypes.STRING,
        notNull: true
    },
    description:{
        field:"description",
        type: DataTypes.TEXT,
        notNull: false,
        default: null
    },
},{
    ...tableConfig,
    tableName:"categories",
    schema:"blogging",
})

module.exports = Category