import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import matches from './mock/allMatches';
import inProgressMatches from './mock/inProgressMatches';
import MatchesServices from '../services/MatchesServices'


import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);
const matchesServices = new MatchesServices();

const { expect } = chai;
const tokenReponse = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JHhpLkh4azFjekFPMG5aUi4uQjM5M3UxMGFFRDBSUTFOM1BBRVhRN0h4dExqS1BFWkJ1LlBXIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY3NTYzMjMwfQ.BvVn3KAFy224f3927MYnIkeC5ebDQi6Ky4d0nfs8M9g' }

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
  describe('Quando tentamos cadastrar um novo jogo', () => {
    const newMatch = {
      id: 50,
      homeTeam: 16,
      homeTeamGoals: 2,
      awayTeam: 8,
      awayTeamGoals: 2,
      inProgress: true
    }
    it('Deve retornar um status 201 apenas com o jogo cadastrado', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/matches')
      .send({ homeTeam: 16, homeTeamGoals: 2, awayTeam: 8, awayTeamGoals: 2 })
      expect(httpResponse.status).to.equal(201)
      expect(httpResponse.body).to.deep.equal(newMatch)
    });
  })
  describe('Quando mudar o status de progresso do jogo', () => {
    it('Deve retornar um status 200 com a mensagem "Finished"', async () => {
      const httpResponse = await chai
      .request(app)
      .patch('/matches/1/finish')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal({ message: 'Finished' })
    });
  })
  describe('Quando tenta cadastrar jogos com times iguais', () => {
    it('Deve retornar um status 422 com a mensagem de erro.', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/matches')
      .send({ homeTeam: 8, homeTeamGoals: 2, awayTeam: 8, awayTeamGoals: 2 })
      expect(httpResponse.status).to.equal(422)
      expect(httpResponse.body).to.deep.equal({ message: 'It is not possible to create a match with two equal teams' })
    });
  })
  describe('Quando tenta cadastrar jogos com times iguais', () => {
    it('Deve retornar um status 422 com a mensagem de erro.', async () => {
      sinon.stub(matchesServices, 'insertNewMatch').resolves(null)
      const httpResponse = await chai
      .request(app)
      .post('/matches')
      .send({ homeTeam: 800, homeTeamGoals: 2, awayTeam: 8, awayTeamGoals: 2 }).set({ 'authorization': tokenReponse.token })
      expect(httpResponse.status).to.equal(404)
      expect(httpResponse.body).to.deep.equal({ message: 'There is no team with such id!' })
    });
  })
});
