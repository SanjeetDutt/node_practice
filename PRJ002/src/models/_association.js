const User = require("./User")
const UserRole = require("./UserRole")
const LoginCredential = require("./LoginCredentials")

// user and user role join
UserRole.hasMany(User,{foreignKey:"user_role_name"})
User.belongsTo(UserRole,{foreignKey:"user_role_name"})

// user and login_credentials join
User.hasMany(LoginCredential, {foreignKey:"user_id"})
LoginCredential.belongsTo(User,{foreignKey:"user_id"})