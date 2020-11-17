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
            <div className={`${cb}__parallax parallax`}>
                <div id='group-1' className='parallax__group mock-navbar'>
                    <div className='parallax__layer parallax__layer--base'>
                        <NavBar />
                    </div>
                </div>
                <div id='group-2' className='parallax__group mock-hero'>
                    <div id='bg-image-1' className='parallax__layer parallax__layer--back'>
                    </div>
                    <div className='parallax__layer parallax__layer--base'>
                        <div className={`${cb}__hero-title-wrapper`}>
                            <div className={`${cb}__hero-title`}>PERCUSSIONIST</div>
                            <div className={`${cb}__hero-title`}>EDUCATOR</div>
                        </div>
                    </div>
                </div>
                <div id='group-3' className='parallax__group'>
                    <div className='parallax__layer parallax__layer--base'>
                        <Bio />
                    </div>
                </div>
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
