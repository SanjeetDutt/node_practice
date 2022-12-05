// ::::::::::: PUBLIC SCHEMA
const User = require("./User")
const UserRole = require("./UserRole")
const LoginCredential = require("./LoginCredentials")


// ::::::::::: BLOGGING SCHEMA
const Categories = require("./blogging/Category")
const Comments = require("./blogging/Comment")
const Metas = require("./blogging/Meta")
const MetaKeys = require("./blogging/MetaKey")
const Posts = require("./blogging/Post")
const Tags = require("./blogging/Tag")

// user and user role join
UserRole.hasMany(User,{foreignKey:"user_role_name"})
User.belongsTo(UserRole,{foreignKey:"user_role_name"})

// user and login_credentials join
User.hasMany(LoginCredential, {foreignKey:"user_id"})
LoginCredential.belongsTo(User,{foreignKey:"user_id"})

// user and post join
User.hasMany(Posts, {foreignKey:"user_id"})
Posts.belongsTo(User, {foreignKey:"user_id"})

// post and comments
Posts.hasMany(Comments, {foreignKey:"post_id"})
Comments.belongsTo(Posts, {foreignKey:"post_id"})

// we can comment under and other comments
Comments.belongsTo(Comments, {foreignKey:"parent_id"})
Comments.hasMany(Comments, {foreignKey:"parent_id"})

//post and meta
Posts.hasMany(Metas, {foreignKey:"post_id"})
Metas.belongsTo(Posts, {foreignKey:"post_id"})

// post and meta keys
MetaKeys.hasMany(Metas, {foreignKey:"key"})
Metas.belongsTo(MetaKeys, {foreignKey:"key"})

// post and categories
Posts.belongsToMany(Categories, {through:"post_categories", foreignKey:"post_id"})
Categories.belongsToMany(Posts, {through:"post_categories", foreignKey:"category_id"})

// post and tags
Posts.belongsToMany(Tags, {through:"post_tags", foreignKey:"post_id"})
Tags.belongsToMany(Posts, {through:"post_tags", foreignKey:"tag_id"})