module.exports = function (chromy, scenario, vp) {
    if (scenario && scenario.args && scenario.args.id) {
        chromy.wait(scenario.args.id)
        chromy.click(scenario.args.id)
        chromy.wait(1000)
    }
    
}
