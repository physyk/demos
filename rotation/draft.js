describe(" ao 'girar' ", function () {

    let mundo, transladarCorpos, rotacionarCorpos, calcularDeslocamentos

    beforeEach(() => {
        mundo = createMundo()
        transladarCorpos = sinon.spy(mundo, 'transladarCorpos')
        rotacionarCorpos = sinon.spy(mundo, 'rotacionarCorpos')
        calcularDeslocamentos = sinon.stub(mundo, 'calcularDeslocamentos')

        calcularDeslocamentos.returns({ angular: 1, linear: 2 })

        mundo.girar()
    })

    it("calcula deslocamentos e movimenta todos os corpos", function () {
        shouldBeCalled(transladarCorpos, rotacionarCorpos, calcularDeslocamentos)
    })

    it("calculo de deslocamento é usado pela rotação e pela translação", function () {
        const {angular: angulo, linear: deslocamento} = calcularDeslocamentos()
        shouldBeCalledWith(transladarCorpos, deslocamento)
        shouldBeCalledWith(rotacionarCorpos, angulo)
    })
})

describe('translação', function () {
    let mundo

    before(function () {
        mundo = createMundo()
    })

    describe('angular', function () {
        it('rotaciona todos os corpos', function () {
            const rotacaoCorpos = createSpies(mundo.corpos, "rotacionar")
                , rotacao = 10

            mundo.rotacionarCorpos(rotacao)
            shouldBeCalledWith(rotacaoCorpos, rotacao)

            restore(rotacaoCorpos)
        })
    })

    describe('linear', function () {
        it('translada todos os corpos', function () {
            const translacaoCorpos = createSpies(mundo.corpos, "transladar")
                , deslocamento = 10

            mundo.transladarCorpos(deslocamento)
            shouldBeCalledWith(translacaoCorpos, deslocamento)

            restore(translacaoCorpos)
        })
    })
})


it('deve aplicar força gravitacional em todos os corpos', function () {
    const Corpo = mundoDependecies()
        , corpos = [new Corpo(), new Corpo(), new Corpo()]
        , spies = createSpies(corpos, "aplicarForca")
        , {gravidade} = createMundo(corpos)

    corpos.forEach(corpo => {
        corpo.aplicarForca.calledWith(gravidade).should.to.be.true
    })
})

xit('calcula posição relativa ao centro de massa', function () {
    const {vertices, centroDeMassa} = corpo
        , calculoVerticesAoCM = createSpies(vertices, "subtrair")

    shouldBeCalledWith(calculoVerticesAoCM, centroDeMassa)

})
