function Mundo(gravidade, corpos) {
    this.corpos = corpos
    this.gravidade = gravidade
}

Mundo.prototype.moverCorpo = function (corpo) {
    corpo.atualizarForcas(this.gravidade)

    const { linear: deslocamento, angular: angulo} = this.calcularDeslocamento(corpo)
    corpo.transladar(deslocamento)
    corpo.rotacionar(angulo)
}

Mundo.prototype.movimentarCorpos = function () {
    this.corpos.forEach(corpo => this.moverCorpo(corpo), this)
}

Mundo.prototype.calcularDeslocamento = function () {

} 