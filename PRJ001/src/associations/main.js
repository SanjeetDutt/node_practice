const userRoles = require("../models/UserRoles")
const users = require("../models/Users")
const cart = require("../models/Cart")
const product = require("../models/Products")


//:::: USER-ROLES AND USERS MAPPING (ONE-MANY MAPPING)
                            // A "HAS ONE" B means foreign key will be defined in B. One-to-one
users.belongsTo(userRoles)  // A "BELONGS TO" B means foreign key will be defined in A One-to-one or one-to-many
userRoles.hasMany(users)    // A "HAS MANY" B means foreign key will be defined in B one-to-many


//:::: USERS-PRODUCT (CART) (MANY TO MANY MAPPING)
users.belongsToMany(product,{through: cart})
product.belongsToMany(users,{through: cart})