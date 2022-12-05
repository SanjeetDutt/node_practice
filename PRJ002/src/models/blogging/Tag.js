const sequelize = require("../../utilities/sequelize")
const {tableConfig} = require("../../utilities/sequelize")
const PrimaryKey = require("../_superModels/PrimaryKeyDefinition");
const {DataTypes} = require("sequelize")

const Tags = sequelize.define("tags",{
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
    tableName:"tags",
    schema:"blogging",
})

module.exports = Tags