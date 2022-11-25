const { DataTypes } = require("sequelize")
const sequelize = require("../util/database")

const product = sequelize.define("products",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        notNull: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
})