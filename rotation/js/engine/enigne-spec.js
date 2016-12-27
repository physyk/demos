function setUpEngineDependecies() {

    function Mundo() { }
    Mundo.prototype.girar = function () {}
    Mundo.prototype.corpos = function () { return 'corpos' }

    function Desenhista() { }
    Desenhista.prototype.pintar = function (corpos) { }

    return new Engine(new Desenhista(), new Mundo())
}

function restore(spies){
    if(!Array.isArray(spies)) spies = [spies]

    spies.forEach(function(spie) {
        spie.restore()
    });
}

describe('Engine', function () {

    let engine, mundo, desenhista

    beforeEach(function () {
        engine = setUpEngineDependecies()
    })

    it('deve ser ativada a cada 1/60s', function () {
        const clock = sinon.useFakeTimers()
            , spy = sinon.spy(engine, "run")

        engine.start()
        clock.tick(3 * 1 / 60 * 1000)

        spy.calledThrice.should.to.be.true

        engine.run.restore()

    });

    it('deve botar o mundo pra girar e mandar o desenhista pintar os objetos ', function () {
        const {mundo, desenhista} =  engine
        
        sinon.spy(mundo, "girar")
        sinon.spy(desenhista, "pintar")

        const corpos = mundo.corpos()

        engine.run()

        mundo.girar.called.should.to.be.true
        desenhista.pintar.calledWith(corpos).should.to.be.true

        restore([mundo.girar, desenhista.pintar])        

    })



});
