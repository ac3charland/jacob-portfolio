import React from 'react'
import './hero.scss'

const cb = 'hero'

const Hero = () => (
    <div className={cb}>
        <div className={`${cb}__hero-title-wrapper`}>
            <div className={`${cb}__hero-title`}>PERCUSSIONIST</div>
            <div className={`${cb}__hero-title`}>EDUCATOR</div>
        </div>
    </div>
)

export default Hero