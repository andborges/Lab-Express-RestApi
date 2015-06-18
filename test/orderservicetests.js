var sinon = require('sinon'),
    expect = require('chai').expect;

var service = require('../services/orderservice');

describe('orderservice', function() {
  var req, res;

  beforeEach(function() {
    req = res = {};
    res.status = sinon.spy();
    res.json = sinon.spy();
  });

  describe('index', function() {

    it('index retorna o id enviado', function() {
      // Arrange
      req = { params: { id: 10 } };

      // Act
      service.index(req, res);

      // Assert
      expect(res.json.calledOnce).to.equal(true);
      expect(res.json.calledWith({ id: 10 })).to.equal(true);
    });

  });

  describe('create', function() {

    it('create retorna dados do objeto criado', function() {
      // Arrange
      req = { body: { number: 10, amount: 100 } };

      // Act
      service.create(req, res);

      // Assert
      expect(res.status.calledWith(201)).to.equal(true);
      expect(res.json.calledWith({ id: 555, number: 10, amount: 100 })).to.equal(true);
    });

  });
});