const { Sequelize } = require("sequelize")
const Timestamp = require("./Timestamp")
module.exports = {
    ...Timestamp,
    effectiveDate:{
        field:"effective_date",
        type:"DATE",
        defaultValue: Sequelize.literal("CURRENT_DATE"),
        notNull: true
    },
    endDate:{
        field:"end_date",
        type:"DATE",
        defaultValue: "2199-12-31",
        notNull: true
    }
}