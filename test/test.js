process.env.NODE_ENV = 'test';

    let chai = require('chai');
    let should = chai.should();
    let expect = require('chai').expect
    //let server = 'http://192.168.121.219:8080/api';
    let server = 'https://app.equals.com.br/api'
    chai.use(require('chai-like'));
    chai.use(require('chai-things'));

describe('Testes API Equals - POST', function(){
    it('/POST login correto', (done) => {
        let loginCorreto = {
            email: "pedro.costa@equals.com.br",
            senha: "Inflexion1310@",
            fonteLogin: "APP"
        }
        chai.request(server)
            .post('/appObterTokens')
            .send(loginCorreto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('idUsuario').eql(9829);

                expect(res.body.tokens).to.be.an('array').that.contains.something.like({
                    id: 9543,
                    cliente: {
                        id: 122,
                        nomeFantasia: 'Demonstração',
                        imagem: null,
                        canalVenda: {
                            id: 1,
                            descricao: null
                        },
                        urlAplicacao: 'https://app2.equals.com.br/'
                    },});
                //res.body.tokens.should.all.have.property('id', 9543) //todo mundo tem que ter a mesma chave valor
                done();
            }
        );
    });
});