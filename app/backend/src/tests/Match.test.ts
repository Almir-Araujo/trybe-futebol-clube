import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import matches from './mock/matches';

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o funcionamento do Endpoint "Match"', () => {
  describe('Quando a requisição é realizada com sucesso', () => {
    it('Deve retornar um status 200 e um array com os jogos', async () => {
      const httpResponse = await chai
      .request(app)
      .get('/match')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.equal(matches)
    });
  })
  // describe('Quando o campo email estiver vazio', () => {
  //   it('Deve retornar um status 400 com a mensagem "All fields must be filled"', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .post('/login')
  //     .send({ password: 'any_password'})
  //     expect(httpResponse.status).to.equal(400)
  //     expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
  //   });
  // })
  // describe('Quando o campo password estiver vazio', () => {
  //   it('Deve retornar um status 400 com a mensagem "All fields must be filled"', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .post('/login')
  //     .send({ email: 'admin@admin.com' })
  //     expect(httpResponse.status).to.equal(400)
  //     expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
  //   });
  // })
  // describe('Quando o email informado estiver incorreto', () => {
  //   it('Deve retornar um status 401 com a mensagem "Incorrect email or password"', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .post('/login')
  //     .send({ email: 'almir@admin.com', password: 'almir' })
  //     expect(httpResponse.status).to.equal(401)
  //     expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' })
  //   });
  // })
  // describe('Quando a senha informada estiver incorreta', () => {
  //   it('Deve retornar um status 401 com a mensagem "All fields must be filled"', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .post('/login')
  //     .send({ email: 'admin@admin.com', password: 'almir' })
  //     expect(httpResponse.status).to.equal(401)
  //     expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' })
  //   });
  // })
});
