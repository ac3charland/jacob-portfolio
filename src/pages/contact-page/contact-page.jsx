import React, {useEffect} from 'react'
import './contact-page.scss'
import ContactForm from '../../components/contact-form/contact-form'
import {CONTACT_ID} from '../../utils/constants'

const cb = 'contact'

const ContactPage = () => {

    useEffect(() => {
        const e = document.getElementById(CONTACT_ID)
        if (e) {
            e.focus()
        }
    }, [])

    return (
        <div className={cb}>
            <h2 id={CONTACT_ID} tabIndex={-1} className={`${cb}__heading`}>Live and Studio Work</h2>
            <h3 className={`${cb}__sub-heading`}>Please use contact form below to discuss project and rates.</h3>
            <div className={`${cb}__form-wrapper`}>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage
