describe('corda', function () {
    let inicio, fim, extremidades, corda, boteco   
    const elasticidade = -2, comprimentoNatural = 0.5

    beforeEach(function () {
        inicio = new Vetor(0, 0)
        fim = new Vetor(1, 1)
        extremidades = [inicio, fim],
        corda = new Corda(comprimentoNatural, elasticidade, extremidades)
    })

    it('calcula tensao', function () {
        const distencao = 1.414 - comprimentoNatural
            , forcaEsperada = distencao * elasticidade
            , ratio = abs(forcaEsperada / corda.tensao().comprimento())

        expect(ratio - 1).to.be.below(0.01)

    })

    it('quando a posicao da corda novo valor da tensao é calculado', function () {
        corda.atualizarExtremidade(new Vetor(2,2))
        
        const novoComprimento = fim.distancia(inicio).comprimento()
            , forcaEsperada = (novoComprimento - comprimentoNatural) *elasticidade
            , ratio = abs(forcaEsperada / corda.tensao().comprimento())

        expect(ratio - 1).to.be.below(0.01)    
    })

})