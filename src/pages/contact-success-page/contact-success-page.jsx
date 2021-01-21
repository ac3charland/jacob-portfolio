import React, {useEffect} from 'react'
import './contact-success-page.scss'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'
import {CONTACT_SUCCESS_ID} from '../../utils/constants'
import SuccessImage from '../../images/contact-success-small.jpg'

const cb = 'contact-success'

const ContactSuccessPage = () => {

    useEffect(() => {
        const e = document.getElementById(CONTACT_SUCCESS_ID)
        if (e) {
            e.focus()
        }
    }, [])

    return (
        <div className={cb}>
            <div className='flex'>
                <NavBar />
                <div className={`${cb}__page-wrapper`}>
                    <h2 id={CONTACT_SUCCESS_ID} tabIndex={-1} className={`${cb}__heading`}>
                        <span className={`${cb}__heading-background`}>Success</span>
                    </h2>
                    <h3 className={`${cb}__sub-heading`}>Your message has been sent. Jacob will be in touch soon!</h3>
                    <img className={`${cb}__image`} src={SuccessImage} alt='Jacob Bicknase playing drums' />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ContactSuccessPage
