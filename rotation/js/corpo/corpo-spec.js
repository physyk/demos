function setCorpoDependecies() {
    function Vetor(x, y) {
        this.x = x
        this.y = y
    }

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

    it('tem seu centro de massa definido pelos vertices', function () {

        const { x, y } = createCorpo({ vertices }).centroMassa
            , expectedX = 0.3333
            , expectedY = 0.3333

        expect(Math.abs(expectedX - x)).to.below(0.0001);
        expect(Math.abs(expectedY - y)).to.below(0.0001);

    })


    it('calcula area do corpo', function () {
        const area = createCorpo({vertices}).calcularArea()
            , expected = 0.5
        expect(Math.abs(area-expected)).to.below(0.1)        
    })

    it('a atualização das forças recalcula e a atualiza as forças aplicadas', function () {

    })

    it('a atualização dos torques recalcula e a atualiza os torques aplicados', function () {

    })

    it('a translação move por igual todas os vertices', function () {

    })

    it('a rotação move por igual rotaciona todos os vertices por igual', function () {

    })
})