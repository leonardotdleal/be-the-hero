const request = require('supertest');
const app = require('../../../../app');
const connection = require('../../../../database/connection');

const ROUTE = '/ongs';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); //clear DB
    await connection.migrate.latest(); //create DB
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post(ROUTE)
      .send({
        name: 'Leonardo',
        email: 'leonardo@teste.com',
        whatsapp: '47000000000',
        city: 'Joinville',
        uf: 'SC'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
