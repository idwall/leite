var GeraDados = require('../index.js');
var expect = require('chai').expect;
var _ = require('underscore');

describe("veiculo", function () {
  var geraDados = new GeraDados();

  describe("tipo()", function () {
    var tipo;

    it("deve retornar um tipo de veículo gerado", function () {
        _(1000).times(function () {

            tipo = geraDados.veiculo.tipo();
            expect(tipo).to.be.a('string');

        });
    });

  });

  describe("restricao()", function () {
    var restricao;

    it("deve retornar uma restricao de veículo gerada", function () {
        _(1000).times(function () {

            restricao = geraDados.veiculo.restricao();
            expect(restricao).to.be.a('string');

        });
    });

  });

  describe("renavam()", function () {
    var renavam;

    it("deve retornar um renavam de veículo gerado", function () {
        _(1000).times(function () {

            renavam = geraDados.veiculo.renavam();
            expect(renavam).to.be.a('string');

        });
    });

  });

  describe("placa()", function () {
    var placa;

    it("deve retornar uma placa de veículo gerada", function () {
        _(1000).times(function () {

            placa = geraDados.veiculo.placa();
            expect(placa).to.be.a('string');

        });
    });

  });

  describe("modelo()", function () {
    var modelo;

    it("deve retornar um modelo de veículo gerado", function () {
        _(1000).times(function () {

            modelo = geraDados.veiculo.modelo();
            expect(modelo).to.be.a('string');

        });
    });

  });

  describe("marca()", function () {
    var marca;

    it("deve retornar uma marca de veículo gerada", function () {
        _(1000).times(function () {

            marca = geraDados.veiculo.marca();
            expect(marca).to.be.a('string');

        });
    });

  });

  describe("especie()", function () {
    var especie;

    it("deve retornar uma espécie de veículo gerada", function () {
        _(1000).times(function () {

            especie = geraDados.veiculo.especie();
            expect(especie).to.be.a('string');

        });
    });

  });

  describe("combustivel()", function () {
    var combustivel;

    it("deve retornar um combustível de veículo gerado", function () {
        _(1000).times(function () {

            combustivel = geraDados.veiculo.combustivel();
            expect(combustivel).to.be.a('string');

        });
    });

  });

  describe("categoria()", function () {
    var categoria;

    it("deve retornar uma categoria de veículo gerada", function () {
        _(1000).times(function () {

            categoria = geraDados.veiculo.categoria();
            expect(categoria).to.be.a('string');

        });
    });

  });

  describe("carroceria()", function () {
    var carroceria;

    it("deve retornar uma carroceria de veículo gerada", function () {
        _(1000).times(function () {

            carroceria = geraDados.veiculo.carroceria();
            expect(carroceria).to.be.a('string');

        });
    });

  });

});
