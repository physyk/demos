function Engine(desenhista, mundo) {
    this.frame = 1/60
    this.desenhista = desenhista
    this.mundo = mundo
}

Engine.prototype.start = function () {
    const run = this.run.bind(this)
    setInterval(run, this.frame * 1000)
}

Engine.prototype.run = function(){
    this.mundo.girar()
    this.desenhista.pintar(this.mundo.corpos())
}