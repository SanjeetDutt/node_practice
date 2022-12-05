const sequelize = require("../../utilities/sequelize")
const {tableConfig} = require("../../utilities/sequelize")
const PrimaryKey = require("../_superModels/PrimaryKeyDefinition");
const {DataTypes} = require("sequelize")

const Meta = sequelize.define("metas",{
    ...PrimaryKey,
    key:{
        field:"key",
        type: DataTypes.STRING,
        notNull: true
    },
    content:{
        field:"content",
        type: DataTypes.TEXT,
        notNull: true,
    },
},{
    ...tableConfig,
    tableName:"post_metas",
    schema:"blogging",
})

module.exports = Meta