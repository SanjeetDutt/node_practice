const { DataTypes } = require("sequelize")

module.exports = {
    id:{
        field:"id",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}