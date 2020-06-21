const jwt = require('jsonwebtoken');
const jwtKey = require('../utils/jwtKey');

module.exports = {
    required(req, res, next){
        try {
            const token = req.headers.authorizathion;
            const decode = jwt.verify(token, jwtKey.JWT_Key);    
            req.user = decode;
            next();
        } catch (error) {
            return res.status(401).send({message: "Falha na autenticação"});
        }
    
    },

    optional(req, res, next){
        try {
            const token = req.headers.authorizathion;
            const decode = jwt.verify(token, jwtKey.JWT_Key);    
            req.user = decode;
            next();
        } catch (error) {
            next();
        }
    
    }
};