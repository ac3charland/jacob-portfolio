import NavBar from '../page/nav-bar'
import HomePage from '../page/home-page'
import LessonPage from '../page/lesson-page'
import ContactForm from '../page/contact-form'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
    })

    it('correctly handles user input on lessons page', () => {
        cy.visit('/')
        cy.get(HomePage.wrapper)

        cy.get(NavBar.link).eq(0).click()

        cy.url().should('contain', '/lessons')
        cy.get(LessonPage.wrapper)

        cy.get(ContactForm.submitButton).click()
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.nameError)
        cy.get(ContactForm.subjectError)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.nameField).type('Clyde Mother-Lovin\' Stubblefield')
        cy.get(ContactForm.nameError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.subjectError)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.subjectField).type('I want to take lessons from you')
        cy.get(ContactForm.subjectError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.emailField).type('clyde')
        cy.get(ContactForm.emailError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.emailField).clear().type('clyde@stubblefield')
        cy.get(ContactForm.emailError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.emailField).clear().type('clyde@stubblefield.gov')
        cy.get(ContactForm.emailError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(LessonPage.wrapper)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.messageField).type('Jake! You\'re the man. I want to study with you.')
        cy.get(ContactForm.messageError).should('not.exist')

        // TODO: Implement submit functionality
    })
})
