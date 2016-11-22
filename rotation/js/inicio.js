function Desenhista() {
    this.desenhos = []
    this.lousa = document.getElementById('myCanvas')
    this.prepararLousa()
}

Desenhista.prototype.prepararLousa = function () {
    this.lousa.width = window.innerWidth;
    this.lousa.height = window.innerHeight;
    this.escala = 50 // 1 metro = 50 pixels
}

Desenhista.prototype.desenhe = function (corpo) {

    var escala = this.escala

    var retangulo = new Path.Rectangle({
        position: [corpo.x * escala, corpo.y * escala],
        size: [corpo.largura * escala, corpo.altura * escala],
        fillColor: 'red'
    })

    this.desenhos.push(retangulo)
}

Desenhista.prototype.apagarLousa = function(){
    var contexto = this.lousa.getContext('2d');
    contexto.clearRect(0, 0, this.lousa.width, this.lousa.height);
}

Desenhista.prototype.desenheNovamente = function (corpos) {
    var escala = this.escala

    for (var i = 0; i < corpos.length; i++) {
        this.desenhos[i].position = new Point(corpos[i].x * escala, corpos[i].y * escala)
    }
}


var newton = new Deus();
var corpo = new Corpo({ massa: 1, x: 5  , y: 1, vx: 0, vy: 0, altura: 1, largura: 1 })

var artista = new Desenhista()

newton.criarNovoMundo()
newton.adicionarCorpoNoMundo(corpo)

artista.desenhe(corpo)

function onFrame() {
    var corpos = newton.informePosicaoDosCorpos()
    artista.apagarLousa()
    artista.desenheNovamente(corpos)
}