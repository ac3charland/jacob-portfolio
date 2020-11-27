module.exports = function (chromy, scenario, vp) {
    if (scenario && scenario.args && scenario.args.selector) {
        const element = scenario.args.selector
        chromy
            .wait(element)
            .evaluate(`_element = '${element}'`)
            .evaluate(function () {
                document.querySelector(_element).scrollIntoView()
            }, element)
            .wait(1000)
    }
}