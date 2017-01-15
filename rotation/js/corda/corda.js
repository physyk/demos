function Corda(comprimentoNatural,  elasticidade, extremidades, boteco) {
    this.inicio = extremidades[0]
    this.fim = extremidades[1]
    this.elasticidade = elasticidade
    this.comprimentoNatural = comprimentoNatural
}

Corda.prototype.tensao = function () {
    const
        distanciaFimInicio = this.fim.distancia(this.inicio)
        , unitarioForca = distanciaFimInicio.unitario()
        , novoComprimento = distanciaFimInicio.comprimento()
        , distencao = novoComprimento - this.comprimentoNatural

    return unitarioForca.multiplicar(distencao * this.elasticidade)
}

Corda.prototype.atualizarExtremidade = function(novaPosicao){
    
}

Corda.prototype.transladarExtremidade = function(deslocamento){
    this.fim.transladar(deslocamento)
}

Corda.prototype.rotacionarExtremidade = function(angulo, ponto){
    this.fim.rotacionar(angulo, ponto)
} 