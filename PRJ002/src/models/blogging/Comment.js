const sequelize = require("../../utilities/sequelize")
const {tableConfig} = require("../../utilities/sequelize")
const PrimaryKey = require("../_superModels/PrimaryKeyDefinition");
const {DataTypes} = require("sequelize")

const Comments = sequelize.define("comments",{
    ...PrimaryKey,
    title:{
        field:"title",
        type: DataTypes.STRING,
        notNull: true
    },
    content:{
        field:"content",
        type: DataTypes.TEXT,
        notNull: true,
    },
    approved:{
        field: "approved",
        type: DataTypes.BOOLEAN,
        default: false
    },
    name:{
        field:"name",
        type: DataTypes.STRING,
        notNull: true
    },
    email:{
        field:"email",
        type: DataTypes.STRING,
        notNull: true
    },
},{
    ...tableConfig,
    tableName:"comments",
    schema:"blogging",
})

module.exports = Comments