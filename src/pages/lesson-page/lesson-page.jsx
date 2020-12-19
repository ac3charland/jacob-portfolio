import React, {useEffect} from 'react'
import './lesson-page.scss'
import LessonImage from '../../images/lessons.jpg'
import ContactForm from '../../components/contact-form/contact-form'
import {LESSON_ID} from '../../utils/constants'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'

const cb = 'lessons'

const LessonPage = () => {

    useEffect(() => {
        const e = document.getElementById(LESSON_ID)
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
                        <img className={`${cb}__photo`} src={LessonImage} alt='Jacob Bicknase in front of piano' />
                    </div>
                    <div className={`${cb}__form-wrapper`}>
                        <h2 id={LESSON_ID} tabIndex={-1} className={`${cb}__heading`}>Lessons</h2>
                        <p className={`${cb}__para`}><strong>Currently accepting students of all ages in piano and percussion.</strong></p>
                        <p className={`${cb}__para ${cb}__para-rates`}>Rates are <strong>$40/hour</strong> or <strong>$25/half hour</strong></p>
                        <div className={`${cb}__flex-columns`}>
                            <div className={`${cb}__column`}>
                                <h3>Percussion</h3>
                                <ul>
                                    <li className={`${cb}__category`}>Drum Set</li>
                                    <li className={`${cb}__category`}>School Band/Orchestral Percussion</li>
                                    <li className={`${cb}__category`}>Latin American/Brazilian Percussion</li>
                                </ul>
                            </div>
                            <div className={`${cb}__column`}>
                                <h3>Piano</h3>
                                <ul>
                                    <li className={`${cb}__category`}>Classical</li>
                                    <li className={`${cb}__category`}>Jazz/Blues</li>
                                    <li className={`${cb}__category`}>Rock</li>
                                </ul>
                            </div>
                        </div>
                        <ContactForm title={'Let\'s get things started:'} />
                    </div>
                </div>
                <Footer />
            </div> 
        </div>
    )
}

export default LessonPage
