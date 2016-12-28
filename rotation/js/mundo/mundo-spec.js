function mundoDependecies() {
    function Corpo() { this.forcas = 0 }
    Corpo.prototype.aplicarForca = function (forca) { }
    Corpo.prototype.transladar = function (deslocamento) { }
    Corpo.prototype.rotacionar = function (rotacao) { }
    return Corpo
}

function isNotArray(item) {
    return !Array.isArray(item)
}

function createMundo(corpos) {
    const Corpo = mundoDependecies()
        , gravidade = 10

    return new Mundo(gravidade, corpos || [new Corpo(), new Corpo()])
}

function createSpies(collection, method) {
    return collection.map(item => sinon.spy(item, method))
}

function shouldBeCalledWith(spies, ...arguments) {
    if (isNotArray(spies)) spies = [spies]
    spies.forEach(spy => {
        spy.calledWith(...arguments).should.to.be.true
    })
}

function shouldBeCalled(spies) {
    spies.forEach(spy => spy.called.should.to.be.true)
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


    describe("ao movimentar corpos", function () {

        let mundo, corpos, transladarCorpos, rotacionarCorpos, calcularDeslocamento

        beforeEach(() => {
            mundo = createMundo()
            corpos = mundo.corpos
            transladarCorpos = createSpies(corpos, 'transladar')
            rotacionarCorpos = createSpies(corpos, 'rotacionar')
            calcularDeslocamento = sinon.spy(mundo, 'calcularDeslocamento')

            mundo.movimentarCorpos()
        })

        it("calcula o deslocamento para cada o corpo, e os rotaciona e translada de acordo", function () {
            shouldBeCalled(transladarCorpos)
            shouldBeCalled(rotacionarCorpos)
            calcularDeslocamento.callCount.should.to.be.equal(corpos.length)
        })

        // it("calculo de deslocamento é usado pela rotação e pela translação", function () {
        //     const {angular: angulo, linear: deslocamento} = calcularDeslocamentos()
        //     shouldBeCalledWith(transladarCorpos, deslocamento)
        //     shouldBeCalledWith(rotacionarCorpos, angulo)
        // })
    })

    describe('cálculo de deslocamento', function () {

        describe('angular', function () {

        })

        describe('linear', function () {

        })
    })






});
