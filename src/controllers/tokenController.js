const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtKey = require('../utils/jwtKey');

module.exports = {
    async token(req, res) {
        const email = req.body.email;
        const user = await connection('users').where('email', email).select('*');

        if(user.length < 1){
            return res.send({message: 'Usuário não encontrado'});
        }
        
        bcrypt.compare(req.body.password, user[0].password).then((result) => {
            if (result){
                const token = jwt.sign({
                    id: user[0].id,
                    name: user[0].name
                }, jwtKey.JWT_Key, {
                    expiresIn: "120"
                });
                return  res.status(200).send({
                    message: "Autenticado com sucesso",
                    token: token
                });
            }

            return res.status(401).send({message: "Falha na autenticação"});
        });    
    },
};
