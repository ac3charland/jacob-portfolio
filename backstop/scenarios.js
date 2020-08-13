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
        cs({label: 'lessons', onReadyScript: 'navigate-to-lessons.js'}),
        cs({label: 'lessons-form-error', onReadyScript: 'trigger-form-error.js'}),
    ]
})