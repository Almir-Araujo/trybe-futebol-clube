import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o funcionamento do Endpoint "login"', () => {
  describe('Quando a requisição é realizada com sucesso', () => {
    it('Deve retornar um status 200 e um token no body', async () => {
      const httpResponse = await chai.request(app).post('/login')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal({ token: '' })
    });
  })
});


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
