function Corpo(gravidade, corda, vertices, massa) {
    this.massa = massa || 1
    this.vertices = vertices
    this.corda = corda
    this.momentoInercia = 1200 //definir
    this.centroMassa = this.calcularCentroMassa()
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

Corpo.prototype.calcularCentroMassa = function () {
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



    return new Vetor(cX,cY)
}

Corpo.prototype.atualizarForcas = function () { }
Corpo.prototype.atualizarTorques = function () { }
Corpo.prototype.transladar = function (deslocamento) { }
Corpo.prototype.rotacionar = function (rotacao) { }

