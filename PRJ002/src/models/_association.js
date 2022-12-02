const User = require("./User")
const UserRole = require("./UserRole")

// user and user role join
UserRole.hasMany(User,{foreignKey:"user_role_name"})
User.belongsTo(UserRole,{foreignKey:"user_role_name"})