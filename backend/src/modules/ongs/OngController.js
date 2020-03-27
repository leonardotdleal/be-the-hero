const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { city, email, name, uf, whatsapp } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({ id, city, email, name, uf, whatsapp });
        
        return response.json({ id });
    },
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
      
        return response.json(ongs);
    }
}