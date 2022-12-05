const sequelize = require("../../utilities/sequelize")
const {tableConfig} = require("../../utilities/sequelize")
const PrimaryKey = require("../_superModels/PrimaryKeyDefinition");
const {DataTypes} = require("sequelize")

const MetaKey = sequelize.define("metaKey",{
    ...PrimaryKey,
    key:{
        field:"key",
        type: DataTypes.STRING,
        notNull: true
    },
    name:{
        field:"name",
        type: DataTypes.STRING,
        notNull: true
    },
    info:{
        field:"info",
        type: DataTypes.STRING,
        notNull: false,
        default: null
    },
},{
    ...tableConfig,
    tableName:"meta_keys",
    schema:"blogging",
})

module.exports = MetaKey