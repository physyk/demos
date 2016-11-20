function Desenhista() {
    this.desenhos = []
    this.lousa = document.getElementById('myCanvas')
    this.prepararLousa()
}

Desenhista.prototype.prepararLousa = function () {
    this.lousa.width = window.innerWidth;
    this.lousa.height = window.innerHeight;
    this.scala = 50 // 1 metro = 60 pixels
}

Desenhista.prototype.desenhe = function (corpo) {

    var scala = this.scala

    var retangulo = new Path.Rectangle({
        position: [corpo.x * scala, corpo.y * scala],
        size: [corpo.largura * scala, corpo.altura * scala],
        strokeColor: 'gray'
    })

    this.desenhos.push(retangulo)
}

Desenhista.prototype.apagarLousa = function(){
    var contexto = this.lousa.getContext('2d');
    contexto.clearRect(0, 0, this.lousa.width, this.lousa.height);
}

Desenhista.prototype.desenheNovamente = function (corpos) {
    var scala = this.scala

    for (var i = 0; i < corpos.length; i++) {
        this.desenhos[i].position = new Point(corpos[i].x * scala, corpos[i].y * scala)
    }
}


var newton = new Deus();
var corpo = new Corpo({ massa: 1, x: 5  , y: 1, vx: 0, vy: 0, altura: 1, largura: 1 })
var corpo2 = new Corpo({ massa: 1, x: 2  , y: 1, vx: 0, vy: 10, altura: 0.5, largura: 1 })

var artista = new Desenhista()

newton.criarNovoMundo()
newton.adicionarCorpoNoMundo(corpo)
newton.adicionarCorpoNoMundo(corpo2)

artista.desenhe(corpo)
artista.desenhe(corpo2)

function onFrame() {
    var corpos = newton.informePosicaoDosCorpos()
    artista.apagarLousa()
    artista.desenheNovamente(corpos)
}