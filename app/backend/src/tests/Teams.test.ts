import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import teams from './mock/teams.mock';

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o funcionamento do Endpoint "Teams"', () => {
  describe('Quando a requisição é realizada com sucesso', () => {
    it('Deve retornar um status 200 e um array com os times', async () => {
      const httpResponse = await chai
      .request(app)
      .get('/teams')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.equal(teams)
    });
  })
  describe('Quando a busca por feita por um id', () => {
    const team = { id: 5, teamName: "Cruzeiro" };
    it('Deve retornar um status 200 com o time correto"', async () => {
      const httpResponse = await chai
      .request(app)
      .get('/teams/5')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(team)
    });
  })
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
