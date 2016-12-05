var _ = require('underscore');
var moment = require('moment');

var methods = {};

var MAX_INT = 9007199254740992;
var MIN_INT = -MAX_INT;

function random() {
  return Math.random();
}

methods.n = function(fn, n) {
  if (typeof n === 'undefined') {
      n = 1;
  }
  var i = n, arr = [], params = Array.prototype.slice.call(arguments, 2);

  i = Math.max( 0, i );

  for (null; i--; null) {
      arr.push(fn.apply(this, params));
  }

  return arr;
};

methods.inteiro = function(options) {
  options = _.defaults(options || {}, {
    min: MIN_INT,
    max: MAX_INT
  });
  return Math.floor(random() * (options.max - options.min + 1) + options.min);
};

methods.natural = function(options) {
  options = _.defaults(options || {}, {
    min: 0,
    max: MAX_INT
  });
  return methods.inteiro(options);
};

methods.removeAcentos = function(str){
  return str.replace(/[^0-9a-z]/gi, '');
};

methods.cpf = function(options) {
  options = _.defaults(options || {}, {
      formatado: false
  });

  var n = methods.n(methods.natural, 9, { max: 9 });
  var d1 = n[8]*2+n[7]*3+n[6]*4+n[5]*5+n[4]*6+n[3]*7+n[2]*8+n[1]*9+n[0]*10;
  d1 = 11 - (d1 % 11);
  if (d1>=10) {
      d1 = 0;
  }
  var d2 = d1*2+n[8]*3+n[7]*4+n[6]*5+n[5]*6+n[4]*7+n[3]*8+n[2]*9+n[1]*10+n[0]*11;
  d2 = 11 - (d2 % 11);
  if (d2>=10) {
      d2 = 0;
  }
  var cpf = ''+n[0]+n[1]+n[2]+'.'+n[3]+n[4]+n[5]+'.'+n[6]+n[7]+n[8]+'-'+d1+d2;
  return options.formatado ? cpf : cpf.replace(/\D/g,'');

};

methods.rg = function() {

  var n = methods.n(methods.natural, 9, { max: 9 });
  return ['',n[0],n[1],'.',n[2],n[3],n[4],'.',n[5],n[6],n[7],'-',n[8]].join('');

};

methods.sexo = function() {
  return _.sample(['Masculino','Feminino']);
};

methods.sobrenome = function() {
  return _.sample(require('../data/pessoa/nomes_sobrenome'));
};

methods.primeiro_nome = function(options) {
  options = _.defaults(options || {}, {
    sexo: methods.sexo(),
    nome_do_meio: false,
    nome_do_meio_abreviado: false,
  });

  var primeiro_nome, nome_do_meio;

  if (options.sexo !== 'Feminino') {
    var nomesHomemData = require('../data/pessoa/nomes_homem');
    primeiro_nome = _.sample(nomesHomemData).split(' ')[0];
    nome_do_meio = _.sample(nomesHomemData).split(' ')[0];
  }
  else {
    var nomesMulherData = require('../data/pessoa/nomes_mulher');
    primeiro_nome = _.sample(nomesMulherData).split(' ')[0];
    nome_do_meio = _.sample(nomesMulherData).split(' ')[0];
  }

  if (options.nome_do_meio_abreviado) {
    primeiro_nome = [primeiro_nome, nome_do_meio.split('')[0]].join(" ");
  }
  else if (options.nome_do_meio) {
    primeiro_nome = [primeiro_nome, nome_do_meio].join(" ");
  }

  return primeiro_nome;

};

methods.nome = function(options) {
  options = _.defaults(options || {}, {
    sexo: methods.sexo(),
    sobrenome: methods.sobrenome()
  });

  return [methods.primeiro_nome(options), options.sobrenome].join(" ");
};

methods.usuario = function(options){
  options = _.defaults(options || {}, {
    nome: methods.nome(options),
  });

  return methods.removeAcentos(options.nome.replace(" ","_")).toLowerCase();

};

methods.email = function(options) {
  return methods.usuario(options) + '@gmail.com';
};

methods.nascimento = function(options) {
  options = _.defaults(options || {}, {
    string: false,
    idade: methods.inteiro({min: 18, max: 100})
  });

  var _nascimento = moment()
    .subtract(options.idade, 'years')
    .subtract(methods.inteiro({min: 0, max: 11}), 'months')
    .subtract(methods.inteiro({min: 0, max: 28}), 'days')
    .toDate();

  if (options.string || options.formato) {

    _nascimento = moment(_nascimento)
      .format(options.formato || "DD/MM/YYYY");

  }

  return _nascimento;

};

methods.idade = function(options) {
  options = _.defaults(options || {}, {
      nascimento: methods.nascimento(),
      min: 1,
      max: 100,
  });

  var today_date = new Date();
  var today_year = today_date.getFullYear();
  var today_month = today_date.getMonth();
  var today_day = today_date.getDate();

  var birth_year = options.nascimento.getFullYear();
  var birth_month = options.nascimento.getMonth();
  var birth_day = options.nascimento.getDate();

  var age = today_year - birth_year;

  if ( today_month < (birth_month - 1)) {
      age--;
  }
  if (((birth_month - 1) === today_month) && (today_day < birth_day)) {
      age--;
  }

  if (age > options.max) {
    age = options.max;
  }
  else if(age < options.min) {
    age = options.min;
  }

  return age;

};

methods.renavam = function() {
  var n = methods.n(methods.natural, 11, { max: 9 });
  return n.join('');
};

methods.veiculo = {};

methods.veiculo.marca = function(){
  return _.sample(require('../data/veiculo/veiculos_fipe')).marca;
};

methods.veiculo.modelo = function(){
  return _.sample(require('../data/veiculo/veiculos_fipe')).name;
};

methods.veiculo.ano = function(){
  return methods.inteiro({ min: 1990, max: new Date().getFullYear() });
};

methods.veiculo.placa = function(){
  return _.sample('ABCDEFGHIJKLMNOPQRSTUVXZ', 3).join('') + methods.inteiro({ min: 1000, max: 9999 });
};

methods.veiculo.cor = function(){
  return _.sample(require('../data/veiculo/cor_renavam')).nome;
};

methods.veiculo.tipo = function(){
  return _.sample(require('../data/veiculo/tipo_renavam')).nome;
};

methods.veiculo.combustivel = function(){
  return _.sample(require('../data/veiculo/combustivel_renavam')).nome;
};

methods.veiculo.carroceria = function(){
  return _.sample(require('../data/veiculo/carroceria_renavam')).nome;
};

methods.veiculo.especie = function(){
  return _.sample(require('../data/veiculo/especie_renavam')).nome;
};

methods.veiculo.restricao = function(){
  return _.sample(require('../data/veiculo/restricao_renavam')).nome;
};

methods.veiculo.categoria = function(){
  return _.sample(require('../data/veiculo/categoria_renavam')).nome;
};

methods.cnpj = function(options) {
  options = _.defaults(options || {}, {
      formatado: false
  });

  var n = methods.n(methods.natural, 8, { max: 9 });
  var d1 = 2+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;
  d1 = 11 - (d1 % 11);
  if (d1>=10){
      d1 = 0;
  }
  var d2 = d1*2+3+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;
  d2 = 11 - (d2 % 11);
  if (d2>=10){
      d2 = 0;
  }
  var cnpj = ''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/0001-'+d1+d2;
  return options.formatado ? cnpj : cnpj.replace(/\D/g,'');

};

methods.localizacao = {};

methods.localizacao.cep = function(options) {

  options = _.defaults(options || {}, {
      formatado: false
  });

  var cep = methods.inteiro({ min: 1, max: 9 }).toString() +
            methods.inteiro({ min: 1000, max: 9999 }).toString() +
            '-' +
            methods.inteiro({ min: 100, max: 999 }).toString();

  return options.formatado ? cep : cep.replace(/\D/g,'');

};

methods.localizacao.estado = function(){
  return _.sample(require('../data/endereco/estados')).uf;
};

methods.localizacao.cidade = function(){
  return _.sample(require('../data/endereco/cidades'));
};

methods.localizacao.bairro = function(){
  return _.sample(require('../data/endereco/bairros'));
};

methods.localizacao.logradouro = function(){
  return _.sample(require('../data/endereco/logradouros'));
};

methods.localizacao.complemento = function(){
  return _.sample([
    "Apartamento " + methods.inteiro({ min: 1, max: 999 }),
    "Aeroporto",
    "Anexo",
    "Andar " + methods.inteiro({ min: 1, max: 20 }),
    "Bloco " + _.sample('ABCDEFGHIJKLMNOPQRSTUVXZ'),
    "Conjunto " + methods.inteiro({ min: 1, max: 999 }),
    "Cobertura",
    "Casa " + methods.inteiro({ min: 1, max: 10 }),
    "Fazenda",
    "Fundos",
    "Galeria",
    "Galpão " + _.sample('ABCDEFGHIJKLMNOPQRSTUVXZ'),
    "Lote " + methods.inteiro({ min: 1, max: 999 }),
    "Loja " + methods.inteiro({ min: 1, max: 999 }),
    "Portão " + _.sample('ABCDEFGHIJKLMNOPQRSTUVXZ'),
    "Quadra " + _.sample('ABCDEFGHIJKLMNOPQRSTUVXZ'),
    "Sala " + methods.inteiro({ min: 1, max: 999 }),
    "Sobreloja " + methods.inteiro({ min: 1, max: 999 }),
    "Subsolo",
    "Terreo"
  ]);
};

methods.localizacao.numero = function(){
  return methods.inteiro({ min: 1, max: 5000 });
};


methods.cnh = {};

methods.cnh.categoria = function() {
  return _.sample(["A","AB","B","C","D","E","ACC","MOTOR-CASA"]);
};

methods.cnh.emissao = function(){

  return moment()
    .subtract(methods.inteiro({min: 0, max: 60}), 'years')
    .subtract(methods.inteiro({min: 0, max: 11}), 'months')
    .subtract(methods.inteiro({min: 0, max: 30}), 'days')
    .toDate();
};

methods.cnh.numero = function(){
  return _.sample('123456789') + methods.n(function(){
    return _.sample('0123456789');
  },11).join('');
};

methods.cnh.registro = function(){
  return _.sample('123456789') + methods.n(function(){
    return _.sample('0123456789');
  },10).join('');
};

methods.cnh.seguranca = methods.cnh.registro;

methods.cnh.validade = function(){

  return moment()
    .add(methods.inteiro({min: 0, max: 4}), 'years')
    .add(methods.inteiro({min: 0, max: 11}), 'months')
    .add(methods.inteiro({min: 0, max: 30}), 'days')
    .toDate();

};

module.exports = methods;
