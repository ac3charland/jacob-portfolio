import React, {useEffect} from 'react'
import './contact-page.scss'
import ContactForm from '../../components/contact-form/contact-form'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'
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
            <div className='flex'>
                <NavBar />
                <div className={`${cb}__page-wrapper`}>
                    <h2 id={CONTACT_ID} tabIndex={-1} className={`${cb}__heading`}>Contact</h2>
                    <div className={`${cb}__form-wrapper`}>
                        <ContactForm />
                    </div>
                </div>
                <Footer />
            </div>
            
        </div>
    )
}

export default ContactPage
