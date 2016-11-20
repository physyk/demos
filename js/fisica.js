/**
 *  
 * A matéria como princípio 
 * 
 * */

function Corpo(propriedades) {
    this.x = propriedades.x
    this.y = propriedades.y
    this.vx = propriedades.vx
    this.vy = propriedades.vy
    this.massa = propriedades.massa
    this.largura = propriedades.largura
    this.altura = propriedades.altura
}

/**
 * 
 * Um mundo para ser habitado
 *  
 */

function Mundo(gravidade, resistenciaDoAr) {
    this.gravidade = gravidade
    this.resistenciaDoAr = resistenciaDoAr
    this.altura = window.innerHeight/50
    this.largura = window.innerWidth/50
    this.corpos = []
    this.dt = 1/60 // 60 frames por segundos
}

Mundo.prototype.adicionarCorpos = function (corpo) {
    this.corpos.push(corpo)
}

Mundo.prototype.run = function () {
    var corpos = this.corpos

    for (var i = 0; i < corpos.length; i++) {
        
        var corpo = corpos[i]
        var massa = corpo.massa
        var vy = corpo.vy
        var ay = corpo.ay

        var dt = this.dt

        if(!corpo.ay){
            ay = 0;
        }

        var dy = vy * dt + (1/2 * ay * dt * dt) 
        corpo.y += dy
        

        var fy = this.gravidade.y * massa - this.resistenciaDoAr * vy 
        var new_ay = fy / massa

        

        corpo.ay = 1/2 * (ay + new_ay) 
        corpo.vy += corpo.ay * dt 


        console.log(corpo)

    }

    return corpos
}

/**
 * Deus, o manipulador.
 */

function Deus() { }

Deus.prototype.criarNovoMundo = function (gravidade) {
    
    var gravidade = { x: 0, y: 9.8 }
    var resistenciaDoAr = 0.1

    this.mundo = new Mundo(gravidade, resistenciaDoAr)

}

Deus.prototype.adicionarCorpoNoMundo = function (corpo) {
    this.mundo.corpos.push(corpo)
}

Deus.prototype.informePosicaoDosCorpos = function () {
    this.mundo.run()
    return this.mundo.corpos
}






