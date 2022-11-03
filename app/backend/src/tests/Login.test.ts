import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import { Model } from 'sequelize/types';
import User from '../database/models/entities/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o funcionamento do Endpoint "login"', () => {
  describe('Quando a requisição é realizada com sucesso', () => {
    const user = { email: 'admin@admin.com', password: 'secret_admin' }
    before(() => sinon.stub(Model, 'findOne'))
    afterAll(() => sinon.restore)
    it('Deve retornar um status 200 e um token no body', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'admin@admin.com', password: 'secret_admin'})
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.equal({ token: '' })
    });
  })
  describe('Quando o campo email estiver vazio', () => {
    it('Deve retornar um status 400 com a mensagem "All fields must be filled"', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({ password: 'any_password'})
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
    });
  })
  describe('Quando o campo password estiver vazio', () => {
    it('Deve retornar um status 400 com a mensagem "All fields must be filled"', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com' })
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
    });
  })
  describe('Quando o email informado estiver incorreto', () => {
    it('Deve retornar um status 401 com a mensagem "Incorrect email or password"', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'almir@admin.com', password: 'almir' })
      expect(httpResponse.status).to.equal(401)
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' })
    });
  })
  describe('Quando a senha informada estiver incorreta', () => {
    it('Deve retornar um status 401 com a mensagem "All fields must be filled"', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'almir' })
      expect(httpResponse.status).to.equal(401)
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' })
    });
  })
});



function before(arg0: () => sinon.SinonStub<[options?: import("sequelize/types").FindOptions<any> | undefined], Promise<Model<any, any> | null>>) {
  throw new Error('Function not implemented.');
}
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
