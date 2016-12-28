function mundoDependecies() {
    function Corpo() { this.forcas = 0 }
    Corpo.prototype.aplicarForca = function (forca) { }
    return Corpo
}

function createMundo(corpos) {
    const Corpo = mundoDependecies()
        , gravidade = 10

    return new Mundo(gravidade, corpos || [new Corpo(), new Corpo()])
}

function createSpies(collection, method) {
    if (!Array.isArray(collection)) collection = [collection]
    return collection.map(item => sinon.spy(item, method))
}


describe('Mundo', function () {

    it('deve aplicar força gravitacional em todos os corpos', function () {
        const Corpo = mundoDependecies()
            , corpos = [new Corpo(), new Corpo(), new Corpo()]
            , spies = createSpies(corpos, "aplicarForca")
            , {gravidade} = createMundo(corpos)

        corpos.forEach(corpo => {
            corpo.aplicarForca.calledWith(gravidade).should.to.be.true
        })
    })

    describe('cálculo de deslocamento', function () {
        describe('angular', function () {

        })

        describe('linear', function () {

        })
    })

    describe('translação', function () {
        describe('angular', function () {
            it('rotaciona todos os objectos', function(){

            })
        })

        describe('linear', function () {
            it('translada todos os objectos', function(){
                
            })
        })
    })




});
