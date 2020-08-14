import React, {Component} from 'react'
import './nav-bar.scss'
import {LESSON_PAGE_URL, CONTACT_PAGE_URL} from '../../utils/constants'

const cb = 'navbar'

export default class NavBar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen,
        })
    }
    
    render() {
        const menuCSS = this.state.menuOpen ? 'open' : 'closed'
        const menuIcon = this.state.menuOpen ? 'fa-times' : 'fa-bars'

        return (
            <div className={cb}>
                <a className={`${cb}__home`} href='/'><h1 className={`${cb}__heading`}>JACOB BICKNASE</h1></a>
                <div className={`${cb}__links ${menuCSS}`}>
                    <button className={`icon ${menuCSS}`} onClick={() => this.toggleMenu()}><i className={`fa ${menuIcon}`}></i></button>
                    <a id={'lessons-link'} className={`${cb}__link ${menuCSS}`} href={LESSON_PAGE_URL}>Lessons</a>
                    <a id={'contact-link'} className={`${cb}__link ${menuCSS}`} href={CONTACT_PAGE_URL}>Contact</a>
                </div>
            </div>
        )
    }

}
