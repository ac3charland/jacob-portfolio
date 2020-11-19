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
                <div className='parallax__group parallax__solid mock-navbar'>
                    <div className='parallax__layer parallax__layer--base'>
                        <NavBar />
                    </div>
                </div>
                <div className='parallax__group parallax__window mock-hero'>
                    <div id='bg-image-1' className='parallax__layer parallax__layer--back'>
                    </div>
                    <div className='parallax__layer parallax__layer--base'>
                        <div className={`${cb}__hero-title-wrapper`}>
                            <div className={`${cb}__hero-title`}>PERCUSSIONIST</div>
                            <div className={`${cb}__hero-title`}>EDUCATOR</div>
                        </div>
                    </div>
                </div>
                <div className='parallax__group parallax__solid'>
                    <div className='parallax__layer parallax__layer--base'>
                        <div className='center'>
                            <Bio />
                        </div>
                    </div>
                </div>
                <div className='parallax__group parallax__window mock-hero'>
                    <div id='bg-image-1' className='parallax__layer parallax__layer--back'>
                    </div>
                </div>
                <div className='parallax__group parallax__solid'>
                    <div className='parallax__layer parallax__layer--base'>
                        <Calendar events={mockEvents} />
                    </div>
                </div>
                <div className='parallax__group parallax__window mock-hero'>
                    <div id='bg-image-1' className='parallax__layer parallax__layer--back'>
                    </div>
                </div>
                <div className='parallax__group parallax__solid'>
                    <div className='parallax__layer parallax__layer--base'>
                        <Media />
                    </div>
                </div>
                <div className='parallax__group parallax__solid'>
                    <div className='parallax__layer parallax__layer--base'>
                        <Footer />
                    </div>
                </div>
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
