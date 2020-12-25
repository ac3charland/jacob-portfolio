import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './nav-bar.scss'
import {LESSON_PAGE_URL, CONTACT_PAGE_URL, CALENDAR_ID, MEDIA_ID, ROOT_URL} from '../../utils/constants'

const cb = 'navbar'

const NavBar = () => {

    const [menuOpen, setMenu] = useState(false)
    const onHomePage = useSelector(state => state.app.onHomePage)
    const events = useSelector(state => state.events.events)
    const shouldShowCalendarLink = events.length > 0

    const toggleMenu = () => {
        setMenu(!menuOpen)
    }

    const menuCSS = menuOpen ? 'open' : 'closed'
    const menuIcon = menuOpen ? 'fa-times' : 'fa-bars'

    return (
        <div className={cb}>
            <a className={`${cb}__home`} href='/'><h1 className={`${cb}__heading`}>JACOB BICKNASE</h1></a>
            <div className={`${cb}__links ${menuCSS}`}>
                <button className={`icon ${menuCSS}`} onClick={toggleMenu}><i className={`fa ${menuIcon}`}></i></button>
                {onHomePage ?
                    <React.Fragment>
                        {shouldShowCalendarLink && <button id={'calendar-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(CALENDAR_ID)}>Calendar</button>}
                        <button id={'media-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(MEDIA_ID)}>Media</button>
                    </React.Fragment> :
                    <React.Fragment>
                        {shouldShowCalendarLink && <a id={'calendar-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + CALENDAR_ID}>Calendar</a>}
                        <a id={'media-link'} className={`${cb}__link ${menuCSS}`} href={ROOT_URL + '#' + MEDIA_ID}>Media</a>
                    </React.Fragment>
                }
                <a id={'lessons-link'} className={`${cb}__link ${menuCSS}`} href={LESSON_PAGE_URL}>Lessons</a>
                <a id={'contact-link'} className={`${cb}__link ${menuCSS}`} href={CONTACT_PAGE_URL}>Contact</a>
            </div>
        </div>
    )
}

const scrollToElement = id => {
    const e = document.getElementById(id)
    if (e) {
        e.scrollIntoView({
            behavior: 'smooth',
        })
        setTimeout(() => e.focus(), 1000)
    }
}

export default NavBar
