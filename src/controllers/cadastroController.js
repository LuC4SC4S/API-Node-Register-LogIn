const bcrypt = require('bcrypt');
const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async cadastro(req, res){
        const name = req.body.name;
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 10);
        const id = generateUniqueId();
    
        await connection('users').insert({
            id,
            name,
            email,
            password
        });
        
        return res.json({message: "cadastrado com sucesso", id: id});
    }
};