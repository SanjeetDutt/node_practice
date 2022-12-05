const sequelize = require("../../utilities/sequelize")
const {tableConfig} = require("../../utilities/sequelize")
const EffectiveTimestamp = require("../_superModels/EffectiveTimestamps");
const PrimaryKey = require("../_superModels/PrimaryKeyDefinition");
const {DataTypes} = require("sequelize")

const Posts = sequelize.define("posts",{
    ...EffectiveTimestamp,
    ...PrimaryKey,
    title:{
        field:"title",
        type: DataTypes.STRING,
        notNull: true
    },
    slug:{
        field:"slug",
        type: DataTypes.STRING,
        notNull: true
    },
    summary:{
        field:"summary",
        type: DataTypes.TEXT,
        notNull: true
    },
    content:{
        field:"content",
        type: DataTypes.TEXT,
        notNull: false,
        default: null
    }
},{
    ...tableConfig,
    tableName:"posts",
    schema:"blogging",
})

module.exports = Posts