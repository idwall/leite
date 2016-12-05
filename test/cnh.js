var GeraDados = require('../index.js');
var expect = require('chai').expect;
var _ = require('underscore');

describe("cnh", function () {

  var geraDados = new GeraDados();

  describe("categoria()", function () {
    var categoria;

    it("deve retornar um número de CNH gerado", function () {
        _(1000).times(function () {

            categoria = geraDados.cnh.categoria();
            expect(categoria).to.be.a('string');

        });
    });

  });

  describe("emissao()", function () {
    var emissao;

    it("deve retornar um número de CNH gerado", function () {
        _(1000).times(function () {

            emissao = geraDados.cnh.emissao();
            expect(emissao).to.be.a('Date');

        });
    });

  });

  describe("validade()", function () {
    var validade;

    it("deve retornar um número de CNH gerado", function () {
        _(1000).times(function () {

            validade = geraDados.cnh.validade();
            expect(validade).to.be.a('Date');

        });
    });

  });

  describe("registro()", function () {
    var registro;

    it("deve retornar um número de CNH gerado", function () {
        _(1000).times(function () {

            registro = geraDados.cnh.registro();
            expect(registro).to.be.a('string');
            expect(registro).to.have.length(11);

        });
    });

  });

  describe("seguranca()", function () {
    var seguranca;

    it("deve retornar um número de CNH gerado", function () {
        _(1000).times(function () {

            seguranca = geraDados.cnh.seguranca();
            expect(seguranca).to.be.a('string');
            expect(seguranca).to.have.length(11);

        });
    });

  });

  describe("numero()", function () {
    var numero;

    it("deve retornar um número de CNH gerado", function () {
        _(1000).times(function () {

            numero = geraDados.cnh.numero();
            expect(numero).to.be.a('string');
            expect(numero).to.have.length(12);

        });
    });

  });

});
