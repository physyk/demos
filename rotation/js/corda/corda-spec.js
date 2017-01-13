describe('corda', function(){

    it('calcula tensao', function(){
        const inicio = new Vetor(0,0)
            , fim = new Vetor(1,1)
            , extremidades = [inicio, fim]
            , elasticidade = -2
            , comprimentoNatural =  0.5

        const corda = new Corda(comprimentoNatural, extremidades, elasticidade)
            , distencao = 1.414 - comprimentoNatural    
            , forcaEsperada = distencao*elasticidade

        expect(abs(forcaEsperada-corda.tensao())).to.be.below(0.01)

    })

    xit('quando a posicao da corda novo valor da tensao é calculado', function(){

    })

})