import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './home-page.scss'
import Bio from '../../components/bio/bio'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'
import Calendar from '../../components/calendar/calendar'
import Media from '../../components/media/media'
import {onHomePage, leavingHomePage} from '../../actions/navigation/navigation'
import {fetchEvents} from '../../actions/events/fetch-events'
import ParallaxWrapper from '../../components/parallax-components/parallax-wrapper'
import ParallaxWindow from '../../components/parallax-components/parallax-window'
import ParallaxHero from '../../components/parallax-components/parallax-hero'

const cb = 'home'

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEvents())
        dispatch(onHomePage())
        scrollToElement()

        return () => {
            dispatch(leavingHomePage())
        }
    }, [])

    return (
        <div className={cb}>
            <div className={`${cb}__parallax`}>
                <ParallaxWrapper>
                    <NavBar />
                </ParallaxWrapper>
                <ParallaxHero/>
                <ParallaxWrapper>
                    <Bio />
                </ParallaxWrapper>
                <ParallaxWindow zIndex={3} positionOffset={'50%'} />
                <ParallaxWrapper>
                    <Calendar />
                </ParallaxWrapper>
                <ParallaxWindow zIndex={2} positionOffset={'80%'} />
                <ParallaxWrapper>
                    <Media />
                </ParallaxWrapper>
                <ParallaxWrapper>
                    <Footer />
                </ParallaxWrapper>
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
