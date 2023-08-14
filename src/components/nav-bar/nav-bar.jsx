import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
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
            <Link className={`${cb}__home`} to='/'><h1 className={`${cb}__heading`}>JACOB BICKNASE</h1></Link>
            <div className={`${cb}__links ${menuCSS}`}>
                <button className={`icon ${menuCSS}`} onClick={toggleMenu}><i className={`fa ${menuIcon}`}></i></button>
                {onHomePage ?
                    <React.Fragment>
                        {shouldShowCalendarLink && (
                            <PaintStrokeWrapper>
                                <button id={'calendar-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(CALENDAR_ID)}>Calendar</button>
                            </PaintStrokeWrapper>
                        )}
                        <PaintStrokeWrapper>
                            <button id={'media-link'} className={`${cb}__link ${menuCSS}`} onClick={() => scrollToElement(MEDIA_ID)}>Media</button>
                        </PaintStrokeWrapper>
                    </React.Fragment> :
                    <React.Fragment>
                        {shouldShowCalendarLink && (
                            <PaintStrokeWrapper>
                                <Link id={'calendar-link'} className={`${cb}__link ${menuCSS}`} to={ROOT_URL + '#' + CALENDAR_ID}>Calendar</Link>
                            </PaintStrokeWrapper>
                        )}
                        <PaintStrokeWrapper>
                            <Link id={'media-link'} className={`${cb}__link ${menuCSS}`} to={ROOT_URL + '#' + MEDIA_ID}>Media</Link>
                        </PaintStrokeWrapper>
                    </React.Fragment>
                }
                <PaintStrokeWrapper>
                    <Link id={'lessons-link'} className={`${cb}__link ${menuCSS}`} to={LESSON_PAGE_URL}>Lessons</Link>
                </PaintStrokeWrapper>
                <PaintStrokeWrapper>
                    <Link id={'contact-link'} className={`${cb}__link ${menuCSS}`} to={CONTACT_PAGE_URL}>Services/Contact</Link>
                </PaintStrokeWrapper>
            </div>
        </div>
    )
}

const PaintStrokeWrapper = props => {
    return (
        <div className={`${cb}__paint-stroke-wrapper`}>
            {props.children}
            <div className={`${cb}__paint-stroke-cover`} />
            <div className={`${cb}__paint-stroke`} />
        </div>
    )
}

PaintStrokeWrapper.propTypes = {
    children: PropTypes.element,
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
