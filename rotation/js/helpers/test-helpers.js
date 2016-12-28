function restore(spies){
    if(!Array.isArray(spies)) spies = [spies]

    spies.forEach(function(spie) {
        spie.restore()
    });
}