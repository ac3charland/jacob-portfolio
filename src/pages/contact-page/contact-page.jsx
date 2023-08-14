import React, {useEffect} from 'react'
import './contact-page.scss'
import ServicesImage from '../../images/services.jpg'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'
import {CONTACT_ID} from '../../utils/constants'
import EmailButton from '../../components/email-button/email-button'
import ContactForm from '../../components/contact-form/contact-form'

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
                    <div className={`${cb}__photo-wrapper`}>
                        <img className={`${cb}__photo`} src={ServicesImage} alt='Jacob Bicknase in front of piano' />
                    </div>
                    <div className={`${cb}__form-wrapper`}>
                        <h2 id={CONTACT_ID} tabIndex={-1} className={`${cb}__heading`}>
                            <span className={`${cb}__heading-background`}>Contact</span>
                        </h2>
                        <h3 className={`${cb}__sub-heading`}>The services I offer include:</h3>
                        <ul className={`${cb}__services`}>
                            <li>Piano/Percussion teacher - One-on-one or group lessons</li>
                            <li>Remote Recording work - Drum Set, Percussion, Piano, Keyboards, Vocals, etc.</li>
                            <li>Piano Tuning - Rates range from $130-$200 depending on shape of piano</li>
                            <li>Producing</li>
                            <li>Mixing</li>
                            <li>Mastering</li>
                            <li>Live Gig Work</li>
                        </ul>
                        <ContactForm />
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default ContactPage
