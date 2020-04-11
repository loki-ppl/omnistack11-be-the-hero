const connect = require('../database/connect')

module.exports = {
    async create(request, response){
        const { id } = request.body;
        const ong = await connect('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong){
            return response.status(400).json({ error: 'ong id nao encontrado'});
        }

        return response.json(ong);
    }
}