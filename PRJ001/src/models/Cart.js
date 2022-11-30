const sequelize = require("../util/database")
const {DataTypes} = require("sequelize");

const cart = sequelize.define("cart",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        notNull: true,
        primaryKey: true
    },
    quantity:DataTypes.INTEGER,
})

module.exports = cart