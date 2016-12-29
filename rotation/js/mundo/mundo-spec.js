function mundoDependecies() {
    function Corpo() {}
    Corpo.prototype.atualizarForcas = function () { }
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
    if (isNotArray(spies)) spies = [spies]
    spies.forEach(spy => spy.called.should.to.be.true)
}

describe('Mundo', function () {

    

    describe("movimento", function () {

        let mundo, corpos, transladarCorpos, rotacionarCorpos, calcularDeslocamento, deslocamento

        beforeEach(() => {
            mundo = createMundo()

            calcularDeslocamento = sinon.stub(mundo, 'calcularDeslocamento')
            deslocamento = { angular: Math.random(), linear: Math.random() }
            calcularDeslocamento.returns(deslocamento)
        })

        it("calcula o deslocamentos(linear, angular) para cada o corpo, e os movimenta", function () {
            const corpos = mundo.corpos
                , transladarCorpos = createSpies(corpos, 'transladar')
                , rotacionarCorpos = createSpies(corpos, 'rotacionar')


            mundo.movimentarCorpos()

            shouldBeCalled(transladarCorpos)
            shouldBeCalled(rotacionarCorpos)
            calcularDeslocamento.callCount.should.to.be.equal(corpos.length)
        })

        it("atualizar forças dos corpos e move-los a partir dos calculos de deslocamento linar e angular", function () {

            const Corpo = new mundoDependecies()
                , corpo = new Corpo()
                , {transladar, rotacionar, atualizarForcas} = createSpyForEachMethod(corpo, 'transladar', 'rotacionar', 'atualizarForcas')

            mundo.moverCorpo(corpo)

            shouldBeCalled(atualizarForcas)    
            shouldBeCalledWith(transladar, deslocamento.linear)
            shouldBeCalledWith(rotacionar, deslocamento.angular)

        })


        it("deve atualizar  ao corpo", function(){

        })

     
    })

    describe('cálculo de deslocamento', function () {
        it('deve ser feita para calculo do tranlação', ()=>{

        })

        it('deve ser feita para calculo do rotação', ()=>{
            
        })

    })






});
