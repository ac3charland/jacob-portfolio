import LessonPage from '../page/lesson-page'
import ContactForm from '../page/contact-form'
import ContactPage from '../page/contact-page'

context('Lesson Page Contact Form', () => {
    beforeEach(() => {
        cy.server()
        cy.route('POST', '/api/contact', {msg: 'success'}).as('postMessage')
    })

    it('correctly handles user input on lessons page', () => {
        cy.visit('/lessons')

        cy.get(LessonPage.wrapper)

        ContactForm.exercise(LessonPage.wrapper)
    })

    it('handles reCAPTCHA error', () => {
        cy.route('POST', '/api/contact', {msg: 'captcha failed'}).as('captchaError')
        cy.visit('/lessons')

        cy.get(LessonPage.wrapper)

        ContactForm.complete()
        cy.wait('@captchaError')
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.apiError).contains('Our reCaptcha has mistaken you for a bot. Don\'t worry: just try submitting again.')
    })

    it('handles unknown error', () => {
        cy.route('POST', '/api/contact', {msg: 'unknown error'}).as('unknownError')
        cy.visit('/lessons')

        cy.get(LessonPage.wrapper)

        ContactForm.complete()
        cy.wait('@unknownError')
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.apiError).contains('An error occurred while sending your message. Please try again.')
    })
})

context('Contact Page Contact Form', () => {
    beforeEach(() => {
        cy.server()
        cy.route('POST', '/api/contact', {msg: 'success'}).as('postMessage')
    })

    it('correctly handles user input on contact page', () => {
        cy.visit('/contact')

        cy.get(ContactPage.wrapper)

        ContactForm.exercise(ContactPage.wrapper)
    })

    it('handles reCAPTCHA error', () => {
        cy.route('POST', '/api/contact', {msg: 'captcha failed'}).as('captchaError')
        cy.visit('/contact')

        cy.get(ContactPage.wrapper)

        ContactForm.complete()
        cy.wait('@captchaError')
        cy.get(ContactPage.wrapper)
        cy.get(ContactForm.apiError).contains('Our reCaptcha has mistaken you for a bot. Don\'t worry: just try submitting again.')
    })

    it('handles unknown error', () => {
        cy.route('POST', '/api/contact', {msg: 'unknown error'}).as('unknownError')
        cy.visit('/contact')

        cy.get(ContactPage.wrapper)

        ContactForm.complete()
        cy.wait('@unknownError')
        cy.get(ContactPage.wrapper)
        cy.get(ContactForm.apiError).contains('An error occurred while sending your message. Please try again.')
    })
})
