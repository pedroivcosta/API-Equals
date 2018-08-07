var assert = require('chai').assert,
    request = require('supertest'),
    expect = require('chai').expect;

//var url = 'https://app.equals.com.br/api';
var url = 'http://192.168.121.219:8080/api';

var loginCorreto = {
    "email": "pedro.costa@equals.com.br",
    "senha": "Inflexion1310@",
    "fonteLogin": "APP"
  };

  var loginEmailIncorreto = {
    "email": "pedro.costa2equals.com.br",
    "senha": "Inflexion1310@",
    "fonteRequisicao": "APP"
  };

  var loginSenhaIncorreta = {
    "email": "pedro.costa2equals.com.br",
    "senha": "Inflexion1310@",
    "fonteRequisicao": "APP"
  };

describe('Testes API Equals - POST', function(){
    it('/POST login correto', function(done){
        request(url)
        .post('/appObterTokens/')
        .set('Content-type', 'application/json')
        .send(loginCorreto)
        .end(function(err, res){
            var result = JSON.parse(res.text);
            assert.equal(res.status, 200);
            assert.equal(result.email, 'pedro.costa@equals.com.br', 'Conferindo o email!');
            done();
        });
    });
});