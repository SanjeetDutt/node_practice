/**
 * Concept of authorization
 * 1. Super admin holds the superpower and can do what ever user and admin do
 * 2. Admin can perform limited task which is defined by super admin
 * 3. User restricted to certain things only
 *
 */

// Will eval is super admin or not
module.exports.isSuperAdmin = (req,res,next)=>{
    next();
}

// Will eval is super admin, admin or not
module.exports.isAdmin = (req,res,next)=>{
    next();
}

// Will eval is super admin, admin or user or not
module.exports.isUser = (req,res,next)=>{
    next();
}