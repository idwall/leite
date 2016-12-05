var GeraDados = require('../index.js');
var expect = require('chai').expect;
var _ = require('underscore');

describe("empresa", function () {
  var geraDados = new GeraDados();

  describe("cnpj()", function () {
    var cnpj;

    it("deve retornar um CNPJ gerado", function () {
        _(1000).times(function () {

            cnpj = geraDados.empresa.cnpj();
            expect(cnpj).to.be.a('string');
            expect(cnpj).to.have.length(14);

        });
    });

    it("deve retornar um CNPJ gerado e formatado", function () {
        _(1000).times(function () {

            cnpj = geraDados.empresa.cnpj({
              formatado: true
            });
            expect(cnpj).to.be.a('string');
            expect(cnpj).to.match(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/m);
            expect(cnpj).to.have.length(18);

        });
    });

  });

});
