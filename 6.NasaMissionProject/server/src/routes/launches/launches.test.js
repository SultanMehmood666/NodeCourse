const request = require('supertest');
const {app} = require('../../app');


describe("Test GET/Launches",()=>{
    test('It should respond with 200 success',  async() => {
        const response = await request(app)
        .get('/launches')
        .expect(200)
     
    })
})

describe("Test POST/Launches",()=>{
    test('It should respond with 201 created', async()=>{
        const resp = await request(app)
        .post('/launches')
        .send({mision:"sultan", rocket:"sultan", target:"lahore"})
        .expect(201)
        .expect('Content-Type', "/json/")

        expect(resp.body).toMatchObject({
            mision:"sultan", 
            rocket:"sultan", 
            target:"lahore",
        })
    })
})