import React from 'react'
import './home-page.scss'
import Hero from '../../components/hero/hero'
import Bio from '../../components/bio/bio'
import Calendar, {mockEvents} from '../../components/calendar/calendar'

const cb = 'home'

const HomePage = () => (
    <div className={cb}>
        <Hero />
        <div className={`${cb}__content-wrapper`}>
            <Bio/>
            <Calendar events={mockEvents}/>
        </div>
    </div>
)

export default HomePage