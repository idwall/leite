  # Leite

  [![License MIT](https://img.shields.io/npm/l/express.svg)](http://opensource.org/licenses/MIT)
  [![Build Status](https://travis-ci.org/idwall/leite.svg?branch=master)](https://travis-ci.org/idwall/leite)
  [![npm](https://img.shields.io/npm/dt/leite.svg?style=flat)](https://www.npmjs.com/package/leite)
  [![Coverage Status](https://coveralls.io/repos/github/idwall/leite/badge.svg)](https://coveralls.io/github/idwall/leite)

  ![Leite](/leite.png)

  Gerador de dados brasileiros aleatórios.

  **IMPORTANTE**: Este gerador de dados foi criado para ajudar no processo de teste de aplicações. Não representa informações reais e não devem ser utilizado para cadastros reais.

  **Mas por que leite?**

  [Leite.](https://youtu.be/YIxzomXm0EQ?t=18)

  ## LEITE

  ```javascript
  const Leite = require('leite')
  const leite = new Leite()
  ```

  ## DEMO

  [Leite empolgante](https://leite-empolgante.now.sh/) (WIP)

  ## PESSOA

  ### CPF

  - `leite.pessoa.cpf()`
  - `leite.pessoa.cpf({ formatado: true })`

  Gera um CPF aleatório

  ```javascript
  leite.pessoa.cpf()
  // => 52779225718
  ```

  Gera um CPF aleatório formatado

  ```javascript
  leite.pessoa.cpf({ formatado: true })
  // => 893.158.068-16
  ```


  ### RG

  - `leite.pessoa.rg()`

  Gera um RG aleatório

  ```javascript
  leite.pessoa.rg()
  // => 28.150.454-1
  ```


  ### Email

  - `leite.pessoa.email()`

  Gera um email aleatório

  ```javascript
  leite.pessoa.email()
  // => jonassouza@gmail.com
  ```


  ### Nome de usuário

  - `leite.pessoa.usuario()`

  Gera um nome de usuario aleatório

  ```javascript
  leite.pessoa.usuario()
  // => hugo_cardoso
  ```


  ### Idade

  - `leite.pessoa.idade()`
  - `leite.pessoa.idade({ min: 1, max: 20 })`

  Gera uma idade aleatória

  ```javascript
  leite.pessoa.idade()
  // => 28
  ```

  Gera uma idade aleatória entre 18 e 28

  ```javascript
  leite.pessoa.idade({ min: 18, max: 28 })
  // => 24
  ```

  ### Data de nascimento

  - `leite.pessoa.nascimento()`
  - `leite.pessoa.nascimento({ string: true })`
  - `leite.pessoa.nascimento({ formato: 'DD/MM/YYYY' })`
  - `leite.pessoa.nascimento({ idade: 10 })`


  Gera uma data de nascimento

  ```javascript
  leite.pessoa.nascimento()
  // => Sat Apr 05 1947 18:48:41 GMT-0700 (PDT)
  ```

  Gera uma data de nascimento como string

  ```javascript
  leite.pessoa.nascimento({ string: true })
  // => 28/06/1949
  ```

  Gera uma data de nascimento no formato especificado

  ```javascript
  leite.pessoa.nascimento({ formato: 'MMMM Do YYYY, h:mm:ss a' })
  // => December 2nd 2016, 6:52:45 pm
  ```

  Gera uma data de nascimento na idade especificada

  ```javascript
  leite.pessoa.nascimento({ idade: 20 })
  // => Sat Apr 05 1996 18:48:41 GMT-0700 (PDT)
  ```

  ### Sexo

  - `leite.pessoa.sexo()`

  Gera um sexo aleatório

  ```javascript
  leite.pessoa.sexo()
  // => Masculino
  ```


  ### Nome

  - `leite.pessoa.nome()`
  - `leite.pessoa.nome({ nomeDoMeio: true })`
  - `leite.pessoa.nome({ nomeDoMeioAbreviado: true })`
  - `leite.pessoa.nome({ sexo: 'Masculino' })`

  Gera um nome aleatório

  ```javascript
  leite.pessoa.nome()
  // => Gustavo Melo
  ```

  Gera um nome aleatório com o nome do meio

  ```javascript
  leite.pessoa.nome({ nomeDoMeio: true })
  // => Ana Maria de Carvalho
  ```

  Gera um nome aleatório com o nome do meio abreviado

  ```javascript
  leite.pessoa.nome({ nomeDoMeioAbreviado: true })
  // => Paulo C Fernandes
  ```

  Gera um nome aleatório do sexo Feminino

  ```javascript
  leite.pessoa.nome({ sexo: 'Feminino' })
  // => Mariana Silva
  ```


  ### Primeiro nome

  - `leite.pessoa.primeiroNome()`
  - `leite.pessoa.primeiroNome({ nomeDoMeio: true })`
  - `leite.pessoa.primeiroNome({ nomeDoMeioAbreviado: true })`
  - `leite.pessoa.primeiroNome({ sexo: 'Masculino' })`

  Gera um primeiro nome aleatório

  ```javascript
  leite.pessoa.primeiroNome()
  // => Pereira
  ```

  Gera um primeiro nome aleatório com o nome do meio

  ```javascript
  leite.pessoa.primeiroNome({ nomeDoMeio: true })
  // => Ana Maria
  ```

  Gera um primeiro nome aleatório com o nome do meio abreviado

  ```javascript
  leite.pessoa.primeiroNome({ nomeDoMeioAbreviado: true })
  // => Paulo C
  ```

  Gera um primeiro nome do sexo Feminino

  ```javascript
  leite.pessoa.primeiroNome({ sexo: 'Feminino' })
  // => Mariana
  ```


  ### Sobrenome

  - `leite.pessoa.sobrenome()`

  Gera um sobrenome aleatório

  ```javascript
  leite.pessoa.sobrenome()
  // => Pereira
  ```


  ## LOCALIZAÇÃO

  ### Logradouro

  - `leite.localizacao.logradouro()`

  Gera um logradouro aleatório

  ```javascript
  leite.localizacao.logradouro()
  // => Avenida Brigadeiro Luís Antônio
  ```

  ### Complemento

  - `leite.localizacao.complemento()`

  Gera um complemento aleatório

  ```javascript
  leite.localizacao.complemento()
  // => Apartamento 405
  ```

  ### Bairro

  - `leite.localizacao.bairro()`

  Gera um bairro aleatório

  ```javascript
  leite.localizacao.bairro()
  // => Grajaú
  ```

  ### CEP

  - `leite.localizacao.cep()`
  - `leite.localizacao.cep({ formatado: true })`

  Gera um cep aleatório

  ```javascript
  leite.localizacao.cep()
  // => 13270000
  ```

  Gera um cep aleatório formatado

  ```javascript
  leite.localizacao.cep({ formatado: true })
  // => 18268-010
  ```

  ### Cidade

  - `leite.localizacao.cidade()`

  Gera uma cidade aleatória

  ```javascript
  leite.localizacao.cidade()
  // => São Paulo
  ```

  ### Estado

  - `leite.localizacao.estado()`

  Gera um estado aleatório

  ```javascript
  leite.localizacao.estado()
  // => MG
  ```

  ## VEÍCULO

  ### Carroceria

  - `leite.veiculo.carroceria()`

  Retorna uma carroceria de veículo

  ```javascript
  leite.veiculo.carroceria()
  // => FURGÃO
  ```

  ### Combustível

  - `leite.veiculo.combustivel()`

  Retorna um combustível de veículo

  ```javascript
  leite.veiculo.combustivel()
  // => GASOLINA
  ```

  ### Placa

  - `leite.veiculo.placa()`

  Gera uma placa de veículo

  ```javascript
  leite.veiculo.placa()
  // => HJU7829
  ```

  ### Categoria

  - `leite.veiculo.categoria()`

  Retorna uma categoria de veículo

  ```javascript
  leite.veiculo.categoria()
  // => PARTICULAR
  ```

  ### Espécie

  - `leite.veiculo.especie()`

  Retorna uma espécie de veículo

  ```javascript
  leite.veiculo.especie()
  // => CORRIDA
  ```

  ### Marca

  - `leite.veiculo.marca()`

  Retorna uma marca de veículo

  ```javascript
  leite.veiculo.marca()
  // => Chevrolet
  ```

  ### Modelo

  - `leite.veiculo.modelo()`

  Retorna um modelo de veículo

  ```javascript
  leite.veiculo.modelo()
  // => 100 2.8 V6 Avant
  ```

  ### Restrição

  - `leite.veiculo.restricao()`

  Retorna uma restrição de veículo

  ```javascript
  leite.veiculo.restricao()
  // => ALIENAÇÃO FIDUCIÁRIA
  ```

  ### Tipo

  - `leite.veiculo.tipo()`

  Retorna um tipo de veículo

  ```javascript
  leite.veiculo.tipo()
  // => MICROÔNIBUS
  ```

  ## EMPRESA

  ### Cnpj

  - `leite.empresa.cnpj()`
  - `leite.empresa.cnpj({ formatado: false })`

  Gera um CNPJ aleatório

  ```javascript
  leite.empresa.cnpj()
  // => 56655075000165
  ```

  Gera um CNPJ aleatório formatado

  ```javascript
  leite.empresa.cnpj({ formatado: true })
  // => 47.846.698/0001-24
  ```

  ## CNH

  ### Número

  - `leite.cnh.numero()`

  Gera um número de CNH aleatório

  ```javascript
  leite.cnh.numero()
  // => 649980822379
  ```

  ### Categoria

  - `leite.cnh.categoria()`

  Retorna uma categoria de CNH

  ```javascript
  leite.cnh.categoria()
  // => 'AB'
  ```

  ### Data de emissão

  - `leite.cnh.emissao()`

  Retorna uma data de emissão de CNH

  ```javascript
  leite.cnh.emissao()
  // => Sat Apr 05 1947 18:48:41 GMT-0700 (PDT)
  ```

  ### Data de validade

  - `leite.cnh.validade()`

  Gera uma data de validade de CNH

  ```javascript
  leite.cnh.validade()
  // => Sat Apr 05 1947 18:48:41 GMT-0700 (PDT)
  ```

  ### Número de registro

  - `leite.cnh.registro()`

  Gera um número de registro de CNH

  ```javascript
  leite.cnh.registro()
  // => 82739462781
  ```

  ### Número de segurança

  - `leite.cnh.seguranca()`

  Gera um número de segurança de CNH

  ```javascript
  leite.cnh.seguranca()
  // => 27638945631
  ```

  ------------------------

  ## TO-DO
  - Gerar CEP válido baseado no estado
  - Gerar RG com padrão do estado
  - Gerador de Empresas
    - Nome
    - Nome Fantasia
    - Inscrição Estadual
  - PIS/PASEP

  ## Fonte de alguns dos dados mockados

  API de Consulta Tabela FIPE
  http://fipeapi.appspot.com/

  Perfil Sistemas - TABELA DE CÓDIGOS RENAVAM
  http://perfilsistemas.blogspot.com/2011/01/tabela-de-codigos-renavam.html
