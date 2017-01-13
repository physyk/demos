function Corda (comprimentoNatural, extremidades, elasticidade){
    this.inicio = extremidades[0]
    this.fim = extremidades[1]
    this.elasticidade = elasticidade
    this.comprimentoNatural = comprimentoNatural
}

Corda.prototype.tensao = function(){
    const novoComprimento = this.fim.distancia(this.inicio).comprimento()
        , distencao = novoComprimento - this.comprimentoNatural

    return distencao*this.elasticidade
}