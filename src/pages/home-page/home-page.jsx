import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
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
    const events = useSelector(state => state.events.events)
    const fetchEventError = useSelector(state => state.events.fetchEventError)
    const eventsFetched = useSelector(state => state.events.fetched)

    useEffect(() => {
        if (!fetchEventError && !eventsFetched) {
            dispatch(fetchEvents())
        }
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
                <ParallaxHero />
                <ParallaxWrapper>
                    <Bio />
                </ParallaxWrapper>
                <ParallaxWindow zIndex={3} positionOffset={'50%'} />
                {events.length > 0 && <React.Fragment>
                    <ParallaxWrapper>
                        <Calendar />
                    </ParallaxWrapper>
                    <ParallaxWindow zIndex={2} positionOffset={'80%'} />
                </React.Fragment>}
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
