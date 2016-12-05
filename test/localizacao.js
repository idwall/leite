var GeraDados = require('../index.js');
var expect = require('chai').expect;
var _ = require('underscore');

describe("localizacao", function () {
  var geraDados = new GeraDados();

  describe("logradouro()", function () {

    var logradouro;

    it("deve retornar um logradouro gerado", function () {
      _(1000).times(function () {

          logradouro = geraDados.localizacao.logradouro();
          expect(logradouro).to.be.a('string');

      });
    });

  });

  describe("estado()", function () {
    var estado;

    it("deve retornar um estado gerado", function () {
      _(1000).times(function () {

          estado = geraDados.localizacao.estado();
          expect(estado).to.be.a('string');
          expect(estado).to.have.length(2);

      });
    });

  });

  describe("complemento()", function () {
    var complemento;

    it("deve retornar um complemento gerado", function () {
      _(1000).times(function () {

          complemento = geraDados.localizacao.complemento();
          expect(complemento).to.be.a('string');

      });
    });

  });

  describe("cidade()", function () {
    var cidade;

    it("deve retornar um cidade gerado", function () {
      _(1000).times(function () {

          cidade = geraDados.localizacao.cidade();
          expect(cidade).to.be.a('string');

      });
    });

  });


  describe("cep()", function () {
    var cep;

    it("deve retornar um cep gerado", function () {
      _(1000).times(function () {

          cep = geraDados.localizacao.cep();
          expect(cep).to.be.a('string');
          expect(cep).to.have.length(8);

      });
    });

    it("deve retornar um cep gerado e formatado", function () {
      _(1000).times(function () {

          cep = geraDados.localizacao.cep({
            formatado: true
          });
          expect(cep).to.be.a('string');
          expect(cep).to.match(/^\d{5}-\d{3}$/m);
          expect(cep).to.have.length(9);

      });
    });

  });

  describe("bairro()", function () {
    var bairro;

    it("deve retornar um bairro gerado", function () {
      _(1000).times(function () {

          bairro = geraDados.localizacao.bairro();
          expect(bairro).to.be.a('string');

      });
    });

  });

});
