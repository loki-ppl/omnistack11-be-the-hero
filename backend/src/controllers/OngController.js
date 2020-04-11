const connect = require('../database/connect');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const ongs = await connect('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connect('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};