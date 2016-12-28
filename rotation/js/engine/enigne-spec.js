function setUpEngineDependecies() {

    function Mundo() { }
    Mundo.prototype.movimentarCorpos = function () {}
    Mundo.prototype.corpos = function () { return 'corpos' }

    function Desenhista() { }
    Desenhista.prototype.pintar = function (corpos) { }

    return new Engine(new Desenhista(), new Mundo())
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

    it('deve botar o mundo pra movimentarCorpos e mandar o desenhista pintar os objetos ', function () {
        const {mundo, desenhista} =  engine
        
        sinon.spy(mundo, "movimentarCorpos")
        sinon.spy(desenhista, "pintar")

        const corpos = mundo.corpos()

        engine.run()

        mundo.movimentarCorpos.called.should.to.be.true
        desenhista.pintar.calledWith(corpos).should.to.be.true

        restore([mundo.movimentarCorpos, desenhista.pintar])        

    })

    





});
