import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './home-page.scss'
import Hero from '../../components/hero/hero'
import Bio from '../../components/bio/bio'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'
import Calendar, {mockEvents} from '../../components/calendar/calendar'
import Media from '../../components/media/media'
import {onHomePage, leavingHomePage} from '../../actions/navigation'

const cb = 'home'

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onHomePage())
        scrollToElement()

        return () => {
            dispatch(leavingHomePage())
        }
    }, [])

    return (
        <div className={cb}>
            <div className={`${cb}__parallax`}>
                <NavBar />
                <Hero />
                <Bio />
                <Calendar events={mockEvents} />
                <Media />
                <Footer />
            </div>
        </div>
    )
}

const scrollToElement = () => {
    const id = window.location.hash
    const e = id ? document.querySelector(id) : null
    if (e) {
        e.focus()
    }
}

export default HomePage
