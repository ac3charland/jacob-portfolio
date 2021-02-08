const backstop = require('./backstop')
const cs = backstop.scenario

const viewport = 'viewport'

module.exports = backstop.config({
    id: 'main',
    fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
    viewports: [
        {
            label: 'large-view',
            width: 1400,
            height: 1000
        },
        {
            label: 'small-view',
            width: 320,
            height: 568
        },
    ],
    scenarios: [
        cs({label: 'home-page'}),
        cs({label: 'home-page__bio', onReadyScript: 'scroll-on-homepage.js', args: {selector: '#backstop-bio'}}),
        // TODO - Removing until we can mock calendar response in Backstop
        // cs({label: 'home-page__calendar', onReadyScript: 'scroll-on-homepage.js', args: {selector: '#backstop-calendar'}}),
        cs({label: 'home-page__media', onReadyScript: 'scroll-on-homepage.js', args: {selector: '#backstop-media'}}),
        cs({label: 'lessons', onReadyScript: 'navigate-to-page.js', args: {id: '#lessons-link'}}),
        cs({label: 'lessons-form-error', onReadyScript: 'trigger-form-error.js', args: {id: '#lessons-link'}}),
        cs({label: 'contact', onReadyScript: 'navigate-to-page.js', args: {id: '#contact-link'}}),
        cs({label: 'contact-page-form-error', onReadyScript: 'trigger-form-error.js', args: {id: '#contact-link'}}),
        cs({label: 'contact-success', url: '/contact/success'}),
    ]
})
