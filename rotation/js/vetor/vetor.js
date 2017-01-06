function Vetor(x, y) {
    this.x = x
    this.y = y
}

Vetor.prototype.transladar = function (translacao) {
    const {x, y} = translacao
    this.x = x
    this.y = y
    
    return this
}
Vetor.prototype.rotacionar = function (angulo, center) {

    center = center || new Vetor(0,0)

    const sin = Math.sin(angulo)
        , cos = Math.cos(angulo)

    const {x, y} = this.distancia(center)

    this.x = center.x + (x * cos - y * sin)
    this.y = center.y + (x * sin + y * cos)

    return this
}


Vetor.prototype.distancia = function (referencia) {
    const x = this.x - referencia.x
        , y = this.y - referencia.y

    return new Vetor(x, y)
}
Vetor.prototype.adicionar = function (vetor) {
    const x = this.x + vetor.x
        , y = this.y + vetor.y
    return new Vetor(x, y)

}
Vetor.prototype.produtoVetorial = function (vetor) {
    const {x, y} = this
    return x * vetor.y - y * vetor.x
}
Vetor.prototype.multiplicar = function (escalar) {
    const x = this.x * escalar
        , y = this.y * escalar

    return new Vetor(x, y)
}
