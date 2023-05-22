import React, {useEffect} from 'react'
import './lesson-page.scss'
import LessonImage from '../../images/lessons.jpg'
import ContactForm from '../../components/contact-form/contact-form'
import EmailButton from '../../components/email-button/email-button'
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
                        <h2 id={LESSON_ID} tabIndex={-1} className={`${cb}__heading`}>
                            <span className={`${cb}__heading-background`}>Lessons</span>
                        </h2>
                        <p className={`${cb}__para`}>Over the past 15 years, I’ve honed a curriculum with a creative approach and a passion for music to drive students to push beyond their potential. Studying music is learning to be a hard worker, a good listener, an individual, a creative thinker and most of all a human being.</p>
                        <p className={`${cb}__para ${cb}__para-rates`}><strong>Everything is better when you love doing it.</strong></p>
                        <p className={`${cb}__para`}>Therefore, the most important value instill in my students is a passion for music. I place a heavy emphasis on students listening to music to develop their own taste.  This way they can learn to become a fan of music and the music making process, which is the driving force behind hard work, motivation and musical growth.</p>
                        <p className={`${cb}__para ${cb}__para-rates`}>I teach beginning, intermediate and advanced lessons for all ages:</p>
                        <div className={`${cb}__flex-columns`}>
                            <div className={`${cb}__column`}>
                                <h3>Piano</h3>
                                <ul>
                                    <li className={`${cb}__category`}>Beginner</li>
                                    <li className={`${cb}__category`}>Classical</li>
                                    <li className={`${cb}__category`}>Jazz/Blues</li>
                                    <li className={`${cb}__category`}>Rock/Pop</li>
                                </ul>
                            </div>
                            <div className={`${cb}__column`}>
                                <h3>Percussion</h3>
                                <ul>
                                    <li className={`${cb}__category`}>Beginner</li>
                                    <li className={`${cb}__category`}>School Percussion</li>
                                    <li className={`${cb}__category`}>Classical</li>
                                    <li className={`${cb}__category`}>Brazilian Percussion</li>
                                    <li className={`${cb}__category`}>Latin Percussion (timbales/conga/bongo)</li>
                                </ul>
                            </div>
                            
                            <div className={`${cb}__column`}>
                                <h3>Drum Set</h3>
                                <ul>
                                    <li className={`${cb}__category`}>Jazz/Blues</li>
                                    <li className={`${cb}__category`}>Rock/Pop</li>
                                    <li className={`${cb}__category`}>Latin/Brazilian</li>
                                </ul>
                            </div>
                        </div>
                        <p className={`${cb}__para ${cb}__para-rates`}>Rates are <strong>$75/hour</strong>, <strong>$60/45 minutes</strong> and <strong>$40/30 minutes</strong>.</p>
                        <EmailButton />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LessonPage
