function Mundo(gravidade, corpos){
    this.corpos = corpos
    this.gravidade = gravidade
    
    this.aplicarGravidadeNosCorpos()    
}

Mundo.prototype.aplicarGravidadeNosCorpos = function(){
    
    this.corpos.forEach(corpo=>corpo.aplicarForca(this.gravidade), this)
}