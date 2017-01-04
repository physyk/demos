function setCorpoDependecies() {

    function Vetor(x, y) {
        this.x = x
        this.y = y
    }

    Vetor.prototype.transladar = function () { return this }
    Vetor.prototype.rotacionar = function () { return this }
    Vetor.prototype.distancia = function () { return this }
    Vetor.prototype.adicionar = function () { return this }
    Vetor.prototype.produtoVetorial = function () { return this }
    Vetor.prototype.multiplicar = function () { return this }

    return Vetor
}


function createCorpo({gravidade, corda, vertices, massa}) {
    gravidade = gravidade || 10
    corda = corda || new (function Corda() { })()
    vertices = vertices || new (function Vetor() { })()
    massa = massa || 1

    return new Corpo(gravidade, corda, vertices, massa)
}

describe('Corpo', function () {

    const Vetor = setCorpoDependecies()
        , vertices = [new Vetor(0, 1), new Vetor(0, 0), new Vetor(1, 0)]

    let corpo


    beforeEach(function () {
        corpo = createCorpo({ vertices })
    })

    it('tem seu centro de massa definido pelos vertices', function () {

        const { x, y } = corpo.centroDeMassa
            , expectedX = 0.3333
            , expectedY = 0.3333

        expect(Math.abs(expectedX - x)).to.below(0.0001);
        expect(Math.abs(expectedY - y)).to.below(0.0001);

    })


    it('calcula area do corpo', function () {
        const area = corpo.calcularArea()
            , expected = 0.5
        expect(Math.abs(area - expected)).to.below(0.1)
    })

    xit('a atualização das forças recalcula e a atualiza as forças aplicadas', function () {

    })

    xit('a atualização dos torques recalcula e a atualiza os torques aplicados', function () {

    })

    describe('durante rotação', function () {
        it('atualiza dados sobre rotacao', function () {
            const aceleracao = 10, velocidade = 30, posicao = 15
                , deslocamento = { aceleracao, velocidade, posicao }

            corpo.rotacionar(deslocamento)

            expect(corpo.deslocamentoAngular).to.be.deep.equal(deslocamento)


        })
    })

    describe('durante a translação', function () {
        it('move a posição do centro centro de massa', function () {
            const
                {centroDeMassa, vertices} = corpo
                , moverCentroDeMassa = createSpies(centroDeMassa, "transladar")
                , translacaoDosVertices = createSpies(vertices, "transladar")
                , deslocamento = { posicao: 30 }

            corpo.transladar(deslocamento)

            shouldBeCalledWith(moverCentroDeMassa, deslocamento.posicao)
            shouldBeCalledWith(translacaoDosVertices, deslocamento.posicao)

        })

        it('atualizar info sobre posição, velocidade e aceleração linear', function () {
            const aceleracao = 10, velocidade = 30, posicao = 15
                , deslocamento = { aceleracao, velocidade, posicao }

            corpo.transladar(deslocamento)

            expect(corpo.deslocamentoLinear).to.be.deep.equal(deslocamento)

        })
    })





})