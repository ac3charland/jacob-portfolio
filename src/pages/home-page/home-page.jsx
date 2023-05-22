import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './home-page.scss'
import Bio from '../../components/bio/bio'
import NavBar from '../../components/nav-bar/nav-bar'
import Footer from '../../components/footer/footer'
import Calendar from '../../components/calendar/calendar'
import Media from '../../components/media/media'
import {onHomePage, leavingHomePage} from '../../actions/navigation/navigation'
import ParallaxWrapper from '../../components/parallax-components/parallax-wrapper'
import ParallaxWindow from '../../components/parallax-components/parallax-window'
import ParallaxHero from '../../components/parallax-components/parallax-hero'

const cb = 'home'
const heroZIndexThreshold = 830
const windowFlipThreshold = 1748

const HomePage = () => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.events)
    const [heroZIndex, setHeroZIndex] = useState(4)
    const [flipWindows, setFlipWindows] = useState(false)

    useEffect(() => {
        dispatch(onHomePage())
        scrollToElement()

        return () => {
            dispatch(leavingHomePage())
        }
    }, [])


    useEffect(() => {
        const parallaxContainer = document.querySelector('.home__parallax')
        if (parallaxContainer) {
            const handleScroll = () => {
                if (parallaxContainer.scrollTop > heroZIndexThreshold && heroZIndex !== 1) {
                    setHeroZIndex(1)
                }
                if (parallaxContainer.scrollTop < heroZIndexThreshold && heroZIndex !== 4) {
                    setHeroZIndex(4)
                }
                if (parallaxContainer.scrollTop > windowFlipThreshold && !flipWindows) {
                    setFlipWindows(true)
                }
                if (parallaxContainer.scrollTop < windowFlipThreshold && flipWindows) {
                    setFlipWindows(false)
                }
            }
            parallaxContainer.addEventListener('scroll', handleScroll, {passive: true})

            return () => parallaxContainer.removeEventListener('scroll', handleScroll, {passive: true})
        }
    })

    return (
        <div className={cb}>
            <div className={`${cb}__parallax`}>
                <ParallaxWrapper>
                    <NavBar />
                </ParallaxWrapper>
                <ParallaxHero zIndex={heroZIndex} />
                <ParallaxWrapper>
                    <Bio />
                </ParallaxWrapper>
                <ParallaxWindow zIndex={flipWindows ? 2 : 3} positionOffset={'50%'} />
                {events.length > 0 && <React.Fragment>
                    <ParallaxWrapper>
                        <Calendar />
                    </ParallaxWrapper>
                    <ParallaxWindow zIndex={flipWindows ? 3 : 2} positionOffset={'80%'} />
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
