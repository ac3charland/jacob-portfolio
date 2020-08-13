module.exports = function (chromy, scenario, vp) {
    chromy.wait('#lessons-link')
    chromy.click('#lessons-link')
    chromy.wait(1000)
}