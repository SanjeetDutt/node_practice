const {Sequelize} = require("sequelize")

module.exports = new Sequelize("postgres://postgres:postgres@localhost:5432/portfolio")

module.exports.tableConfig = {
    createdAt: "create_ts",
    updatedAt: 'update_ts',
    schema: 'public',
    paranoid: true,
    deletedAt: 'delete_ts'
}