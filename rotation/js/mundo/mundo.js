function Mundo(gravidade, corpos) {
    this.corpos = corpos
    this.gravidade = gravidade

    this.aplicarGravidadeNosCorpos()
}

Mundo.prototype.aplicarGravidadeNosCorpos = function () {
    this.corpos.forEach(corpo => corpo.aplicarForca(this.gravidade), this)
}

Mundo.prototype.girar = function () {
    const translacoes = this.calcularDeslocamentos()
    this.movimentarCorpos(translacoes)
}

Mundo.prototype.transladarCorpos = function (deslocamento) {
    this.corpos.forEach(corpo => corpo.transladar(deslocamento))
}

Mundo.prototype.rotacionarCorpos = function (angulo) {
    this.corpos.forEach(corpo => corpo.rotacionar(angulo))
}

Mundo.prototype.moverCorpo = function (corpo) {
    const {linear: deslocamento, angular: angulo} = this.calcularDeslocamento(corpo)
    corpo.transladar(deslocamento)
    corpo.rotacionar(angulo)
}

Mundo.prototype.movimentarCorpos = function () {
    this.corpos.forEach(corpo => this.moverCorpo(corpo), this)
}

Mundo.prototype.calcularDeslocamento = function () {

}

