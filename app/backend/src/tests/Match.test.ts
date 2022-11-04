import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import matches from './mock/allMatches';
import inProgressMatches from './mock/inProgressMatches';

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
      .get('/matches')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.equal(matches)
    });
  })
  describe('Quando solicitado filtrar os jogos em progresso', () => {
    it('Deve retornar um status 200 apenas os jogos que estão em progresso', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/matches?inProgress=true')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(inProgressMatches)
    });
  })
  // describe('Quando tentamos cadastrar um novo jogo', () => {
  //   const newMatch = {
  //     id: 50,
  //     homeTeam: 16,
  //     homeTeamGoals: 2,
  //     awayTeam: 8,
  //     awayTeamGoals: 2,
  //     inProgress: true
  //   }
  //   it('Deve retornar um status 201 apenas com o jogo cadastrado', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .post('/matches')
  //     .send({ homeTeam: 16, homeTeamGoals: 2, awayTeam: 8, awayTeamGoals: 2 })
  //     expect(httpResponse.status).to.equal(201)
  //     expect(httpResponse.body).to.deep.equal(newMatch)
  //   });
  // })
  // describe('Quando mudar o status de progresso do jogo', () => {
  //   it('Deve retornar um status 200 com a mensagem "Finished"', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .patch('/matches/1/finish')
  //     expect(httpResponse.status).to.equal(200)
  //     expect(httpResponse.body).to.deep.equal({ message: 'Finished' })
  //   });
  // })
  // describe('Quando tenta cadastrar jogos com times iguais', () => {
  //   it('Deve retornar um status 422 com a mensagem de erro.', async () => {
  //     const httpResponse = await chai
  //     .request(app)
  //     .post('/matches')
  //     .send({ homeTeam: 16, homeTeamGoals: 2, awayTeam: 16, awayTeamGoals: 2 })
  //     expect(httpResponse.status).to.equal(422)
  //     expect(httpResponse.body).to.deep.equal({ message: 'It is not possible to create a match with two equal teams' })
  //   });
  // })
});
