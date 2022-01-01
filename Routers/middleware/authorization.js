const roleModel = require("./../../db/models/role");
/// what u can do ?
///نتاكد من الرول 

const authorization = async(req, res, next) => {
    try {
        const roleID = req.token.role;
        const result = await roleModel.findById(roleID);
        if(result.role === "admin"){
            next();
        }else{
            res.status(403).json("forbidden")
        }
    } catch (err) {
        res.status(403).json(err);
    }
};

module.exports = authorization;