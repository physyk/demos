function Corpo(gravidade, corda, vertices, massa) {
    this.massa = massa || 1
    this.vertices = vertices
    this.centroDeMassa = this.calcularcentroDeMassa()
    this.corda = corda
    this.momentoInercia = 1200 //definir
    this.deslocamentoLinear = { posicao: this.centroDeMassa, velocidade: 0, aceleracao: 0 }
    this.deslocamentoAngular = { posicao: 0, velocidade: 0, aceleracao: 0 }
}


Corpo.prototype.calcularArea = function () {
    const vertices = this.vertices
        , indiceFinal = vertices.length - 1

    let area = 0

    for (var i = 0; i <= indiceFinal; i++) {
        let proximoIndice = i === indiceFinal ? 0 : i + 1

        let {x, y} = vertices[i]
            , { x: xProximo, y: yProximo } = vertices[proximoIndice]

        area += Math.abs((x * yProximo - y * xProximo)) / 2
    }

    return area
}

Corpo.prototype.calcularcentroDeMassa = function () {
    const vertices = this.vertices
        , indiceFinal = vertices.length - 1
        , area = this.calcularArea()

    let cX = cY = 0


    for (var i = 0; i <= indiceFinal; i++) {
        let proximoIndice = i === indiceFinal ? 0 : i + 1

        let {x, y} = vertices[i]
            , { x: xProximo, y: yProximo } = vertices[proximoIndice]

        let coeficienteComum = (x * yProximo - y * xProximo) / (6 * area)

        cX += (x + xProximo) * coeficienteComum
        cY += (y + yProximo) * coeficienteComum

    }

    return new Vetor(cX, cY)
}

Corpo.prototype.peso = function () {
    const {massa, gravidade} = this
    return gravidade.multiplicar(massa)
}

Corpo.prototype.atualizarForcas = function () {
    const {tensaoCorda} = this.corda
    this.forcaResultante = this.peso().adicionar(tensaoCorda())
}

Corpo.prototype.atualizarTorques = function () {
    const {centroDeMassa} = this
        , {pontoAmarradoAoCorpo, tensaoCorda} = this.corda

    const braco = pontoAmarradoAoCorpo.distancia(centroDeMassa)

    this.torqueResultante = braco.produtoVetorial(tensaoCorda())
}

Corpo.prototype.transladarVertices = function (deslocamento) {
    this.vertices.forEach(vertice => vertice.transladar(deslocamento))
}

Corpo.prototype.rotacionarVertices = function (angulo) {
    const {centroDeMassa} = this
    this.vertices.forEach(vertice => vertice.rotacionar(angulo, centroDeMassa))
}

Corpo.prototype.transladar = function (translacao) {
    const {posicao} = translacao
    this.deslocamentoLinear = translacao
    this.centroDeMassa.transladar(posicao)
    this.transladarVertices(posicao)
}

Corpo.prototype.rotacionar = function (rotacao) {
    const {posicao: angulo } = rotacao
    this.rotacionarVertices(angulo)
    this.deslocamentoAngular = rotacao
}

