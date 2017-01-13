describe('Vetor', function () {

    let vetor

    it('Translada os corpos', function () {
        const x = 3, y = 3
            , deslocamento = new Vetor(x, y)
            , vetor = new Vetor(0, 0)

        vetor.transladar(deslocamento)
        expect(vetor).to.deep.equal(deslocamento)

    });

    it('Rotacionar o corpo em torno do ponto (0,0)', function () {
        const angulo = Math.PI / 2
            , vetor = new Vetor(0, 1)

        vetor.rotacionar(angulo)

        const {x, y} = vetor
            , specX = -1, specY = 0

        expect(abs(specX - x)).to.be.below(0.01)
        expect(abs(specY - y)).to.be.below(0.01)
    });

    it('Calcula distancia entre o vetor e uma nova posição dada', function () {
        const x = 1, y = 2
            , vetor = new Vetor(x, y)

        const xRef = 2, yRef = 3
            , referencia = new Vetor(xRef, yRef)

        const {x: xDistancia, y: yDistancia} = vetor.distancia(referencia)

        expect(xDistancia).to.equal(x - xRef)
        expect(yDistancia).to.equal(y - yRef)

    });



    it('Adiciona', function () {
        const x = 1, y = 3
            , vetor = new Vetor(x, y)

        const xReferencia = 1, yReferencia = 3
            , referencia = new Vetor(xReferencia, yReferencia)

        const novo = vetor.adicionar(referencia)

        expect(novo.x).to.equal(x + xReferencia)
        expect(novo.y).to.equal(y + yReferencia)

    });

    it('Calcula a componente do produto no eixo z', function () {
        const vetor = new Vetor(1, 1)
            , ref = new Vetor(1, 0)
        expect(vetor.produtoVetorial(ref)).to.equal(-1)
    });

    it('Multiplica por um escalar', function () {
        const vetor = new Vetor(1, 1)
            , scale = 5

        const newVetor = vetor.multiplicar(scale)

        expect(newVetor).to.deep.equal(new Vetor(vetor.x * scale, vetor.y * scale))
    });

    it('calcula proprio comprimento', function () {
        const x = 3, y = 1
            , vetor = new Vetor(x, y)
            , comprimentoEsperado = Math.sqrt(x*x+y*y) 
            , erro = abs(vetor.comprimento()-comprimentoEsperado)

        expect(erro).to.be.below(0.001)

    })


})
