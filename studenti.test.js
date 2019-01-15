const request = require('supertest')
const app = require('../aGITati/studenti')

describe('GET /studente/esami/:matricola/', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/studente/esami/:matricola')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

describe('GET /assignments/professore/:id_professore/corso/:id_corso', function() {
  it('/assignments/:id --> returns one of the :id included in the DB and should return 200', async () => {
    const Id = 1;
    const response = await request(app).get('/api/v1/assignments/'+Id);
    expect(response.statusCode).toBe(200);

    const assignment = response.body;
    expect(assignment).toBeDefined();
    expect(assignment.id).toBe(Id);
    expect(assignment.assignment_name).toEqual(response.body.assignment_name);
    expect(assignment.prof_name).toEqual(response.body.prof_name);
    expect(assignment.course).toEqual(response.body.course);
  });
});