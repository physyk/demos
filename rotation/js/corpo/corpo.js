
function Corpo(gravidade, corda, vertices, massa) {
    this.massa = massa || 1
    this.vertices = vertices
    this.corda = corda
    this.momentoInercia = 1200 //definir
    this.centroMassa = this.calcularCentroMassa()    
    this.deslocamentoLinear = {posicao: this.centroDeMassa, velocidade: 0, aceleracao: 0}
    this.deslocamentoAngular = {posicao: 0, velocidade: 0, aceleracao: 0}
}

Corpo.prototype.calcularCentroMassa = function(){}
Corpo.prototype.atualizarForcas = function () { }
Corpo.prototype.atualizarTorques = function(){}
Corpo.prototype.transladar = function (deslocamento) { }
Corpo.prototype.rotacionar = function (rotacao) { }

