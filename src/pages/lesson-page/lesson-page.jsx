import React from 'react'
import './lesson-page.scss'
import LessonImage from '../../images/lessons.jpg'

const cb = 'lessons'

export default function LessonPage() {
    return (
        <div className={cb}>
            <div className={`${cb}__photo-wrapper`}>
                <img className={`${cb}__photo`} src={LessonImage} alt='Jacob Bicknase in front of piano' />
            </div>
            <div className={`${cb}__form-wrapper`}>
                <h2 className={`${cb}__heading`}>Lessons</h2>
                <p className={`${cb}__para`}><strong>Currently accepting students of all ages in piano and percussion.</strong></p>
                <p className={`${cb}__para ${cb}__para-rates`}>Rates are <strong>$45/hour</strong> or <strong>$30/half hour</strong></p>
                <div className={`${cb}__flex-columns`}>
                    <div className={`${cb}__column`}>
                        <h3>Percusson</h3>
                        <ul>
                            <li className={`${cb}__red`}>Drum Set</li>
                            <li className={`${cb}__green`}>School Band/Orchestral Percussion</li>
                            <li className={`${cb}__yellow`}>Latin American/Brazilian Percussion</li>
                        </ul>
                    </div>
                    <div className={`${cb}__column`}>
                        <h3>Piano</h3>
                        <ul>
                            <li className={`${cb}__green`}>Classical</li>
                            <li className={`${cb}__red`}>Jazz/Blues</li>
                            <li className={`${cb}__blue`}>Rock</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
