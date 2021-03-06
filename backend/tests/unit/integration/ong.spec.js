const request = require('supertest');
const app = require('../../../src/app');
const connection = require('../../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.latest();
        await connection.migrate.rollback();   
   
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ana Rosa",
	            email: "contato@arosa.com",
                whatsapp: "11900000000",
                city: "Rio do Sul",
                uf: "SC"
             });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
    
});