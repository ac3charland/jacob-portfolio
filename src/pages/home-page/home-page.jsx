import React from 'react'
import './home-page.scss'
import Hero from '../../components/hero/hero'

const cb = 'home'

const HomePage = () => (
    <div className={cb}>
        <Hero />
        <div className={`${cb}__content-wrapper`}>
            <h1>Test content</h1>
            <div style={{backgroundColor: 'aquamarine'}}>Long div</div>
        </div>
    </div>
)

export default HomePage