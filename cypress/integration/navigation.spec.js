import NavBar from '../page/nav-bar'
import HomePage from '../page/home-page'
import LessonPage from '../page/lesson-page'
import ContactPage from '../page/contact-page'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
        cy.route('GET', '/api/events', {
            events: [
                {
                    title: 'Left Field Quartet',
                    venueName: 'Art Inn',
                    streetAddress: '123 Main St',
                    city: 'Madison',
                    state: 'WI',
                    zip: '12345',
                    dateTime: '2020-08-01T04:00:00.000Z',
                },
                {
                    title: 'Thompson Springs',
                    venueName: 'High Noon Saloon',
                    streetAddress: '123 Main St',
                    city: 'Madison',
                    state: 'WI',
                    zip: '12345',
                    dateTime: '2051-08-05T04:00:00.000Z',
                },
            ],
        }).as('getEvents')
    })
    
    it('navigates from home page to proper pages with navbar links', () => {
        cy.visit('/')
        cy.get(HomePage.wrapper)
        cy.wait('@getEvents')

        cy.get(NavBar.link).eq(0).click()
        cy.get(HomePage.calendarId).should('have.focus')

        cy.get(NavBar.link).eq(1).click()
        cy.get(HomePage.mediaId).should('have.focus')

        cy.get(NavBar.link).eq(2).click()
        cy.url().should('contain', '/lessons')
        cy.get(LessonPage.wrapper)
        cy.get(LessonPage.id).should('have.focus')

        cy.get(NavBar.homeLink).click()
        cy.url().should('contain', '/')
        cy.get(HomePage.wrapper)

        cy.get(NavBar.link).eq(3).click()
        cy.url().should('contain', '/contact')
        cy.get(ContactPage.wrapper)
        cy.get(ContactPage.id).should('have.focus')

        cy.go('back')
        cy.url().should('contain', '/')
        cy.get(HomePage.wrapper)
    })

    it('navigates from lesson page to proper pages with navbar links', () => {
        cy.visit('/lessons')
        cy.get(LessonPage.wrapper)

        cy.get(NavBar.link).eq(0).click()
        cy.get(HomePage.wrapper)
        cy.get(HomePage.calendarId).should('have.focus')
        
        cy.get(NavBar.link).eq(2).click()
        cy.get(LessonPage.wrapper)
        cy.get(LessonPage.id).should('have.focus')

        cy.get(NavBar.link).eq(1).click()
        cy.get(HomePage.wrapper)
        cy.get(HomePage.mediaId).should('have.focus')

        cy.go('back')
        cy.url().should('contain', '/lessons')
        cy.get(LessonPage.wrapper)
        cy.get(LessonPage.id).should('have.focus')

        cy.get(NavBar.link).eq(3).click()
        cy.url().should('contain', '/contact')
        cy.get(ContactPage.wrapper)

        cy.get(NavBar.link).eq(2).click()
        cy.url().should('contain', '/lessons')
        cy.get(LessonPage.wrapper)
        cy.get(LessonPage.id).should('have.focus')
    })

    it('navigates from contact page to proper pages with navbar links', () => {
        cy.visit('/contact')
        cy.get(ContactPage.wrapper)
        cy.get(ContactPage.id).should('have.focus')

        cy.get(NavBar.link).eq(0).click()
        cy.get(HomePage.wrapper)
        cy.get(HomePage.calendarId).should('have.focus')

        cy.get(NavBar.link).eq(3).click()
        cy.get(ContactPage.wrapper)
        cy.get(ContactPage.id).should('have.focus')

        cy.get(NavBar.link).eq(1).click()
        cy.get(HomePage.wrapper)
        cy.get(HomePage.mediaId).should('have.focus')

        cy.go('back')
        cy.url().should('contain', '/contact')
        cy.get(ContactPage.wrapper)
        cy.get(ContactPage.id).should('have.focus')

        cy.get(NavBar.link).eq(2).click()
        cy.url().should('contain', '/lessons')
        cy.get(LessonPage.wrapper)
        cy.get(LessonPage.id).should('have.focus')

        cy.go('back')
        cy.url().should('contain', '/contact')
        cy.get(ContactPage.wrapper)
        cy.get(ContactPage.id).should('have.focus')
    })
})
