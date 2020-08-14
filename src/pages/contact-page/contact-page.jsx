import React from 'react'
import './contact-page.scss'
import ContactForm from '../../components/contact-form/contact-form'

const cb = 'contact'

const ContactPage = () => (
    <div className={cb}>
        <h2 className={`${cb}__heading`}>Live and Studio Work</h2>
        <h3 className={`${cb}__sub-heading`}>Please use contact form below to discuss project and rates.</h3>
        <div className={`${cb}__form-wrapper`}>
            <ContactForm />
        </div>
    </div>
)

export default ContactPage
