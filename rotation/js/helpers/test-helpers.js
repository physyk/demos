function restore(spies){
    if(!Array.isArray(spies)) spies = [spies]

    spies.forEach(function(spie) {
        spie.restore()
    });
}

function isNotArray(item) {
    return !Array.isArray(item)
}

function createSpies(collection, method) {
    if (isNotArray(collection)) collection = [collection]
    return collection.map(item => sinon.spy(item, method))
}

function createSpyForEachMethod(collection, ...methods) {
    var object = {}
    methods.forEach(method => object[method] = sinon.spy(collection, method))
    return object
}

function shouldBeCalledWith(spies, ...arguments) {
    if (isNotArray(spies)) spies = [spies]
    spies.forEach(spy => {
        spy.calledWith(...arguments).should.to.be.true
    })
}

function shouldBeCalled(spies) {
    if (isNotArray(spies)) spies = [spies]
    spies.forEach(spy => spy.called.should.to.be.true)
}