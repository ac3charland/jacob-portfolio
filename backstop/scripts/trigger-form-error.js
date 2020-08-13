module.exports = function (chromy, scenario, vp) {
    chromy.wait('#lessons-link')
    chromy.click('#lessons-link')
    chromy.wait(1000)
    chromy.click('.form__submit')
    chromy.wait(500)
}