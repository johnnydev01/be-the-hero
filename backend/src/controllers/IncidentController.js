const connection = require('../database/connection'); 

module.exports = {


    async index(request, response) {
        const { page = 1 } = request.query;

        //conta a quantidade de registro da tabela
        const [count] = await connection('incidents').count();

        // consulta paginada
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);

        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ id }); 
    },

    async delete(request, response) {
        const  ong_id  = request.headers.authorization;
        const { id } = request.params;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if(incident.ong_id !== ong_id) {
            //HTTP code: 401 Unauthorized
            return response.status(401).json({ error: 'Operation Unauthorized.'});
        }

        await connection('incidents').where('id', id).delete();

        //HTTP code: 204 No content
        return response.status(204).send();
    }
}