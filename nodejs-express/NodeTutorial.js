var Tutorial = require('./Tutorial')

exports.NodeTutorial = function() {
    console.log('Node Tutorial')

    this.pTutor = function() {
        var PTutor = Tutorial
        PTutor.tutorial()
    }
}
