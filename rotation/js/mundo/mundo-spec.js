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

function createSpyForEachMethod(collection, ...methods) {
    var object = {}
    methods.forEach(method => object[method] = sinon.spy(collection, method))
    return object
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


    describe("movimento", function () {

        let mundo, corpos, transladarCorpos, rotacionarCorpos, calcularDeslocamento, deslocamento

        beforeEach(() => {
            mundo = createMundo()

            calcularDeslocamento = sinon.stub(mundo, 'calcularDeslocamento')
            deslocamento = {angular:Math.random(), linear: Math.random()}
            calcularDeslocamento.returns(deslocamento)
    })

    it("calcula o deslocamentos(linear, angular) para cada o corpo, e os rotaciona", function () {
        const corpos = mundo.corpos
            , transladarCorpos = createSpies(corpos, 'transladar')
            , rotacionarCorpos = createSpies(corpos, 'rotacionar')

        mundo.movimentarCorpos()

        shouldBeCalled(transladarCorpos)
        shouldBeCalled(rotacionarCorpos)
        calcularDeslocamento.callCount.should.to.be.equal(corpos.length)
    })

    it("transladar e rotacionar de acordo com os calculos de deslocamento linar e angular, respectivamente", function () {

        const Corpo = new mundoDependecies()
            , corpo = new Corpo()
            , {transladar, rotacionar} = createSpyForEachMethod(corpo, 'transladar', 'rotacionar')

        mundo.moverCorpo(corpo)

        shouldBeCalledWith(transladar, deslocamento.linear)
        shouldBeCalledWith(rotacionar, deslocamento.angular)

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
