import React from 'react'
import './parallax-hero.scss'

const cb = 'hero'

const ParallaxHero = () => (
    <div className={cb}>
        <div className={`${cb}__background-layer`} />
        <div className={`${cb}__hero-title-wrapper`}>
            <div className={`${cb}__hero-title`}>PERCUSSIONIST</div>
            <div className={`${cb}__hero-title`}>RECORDING ARTIST</div>
            <div className={`${cb}__hero-title`}>EDUCATOR</div>
        </div>
    </div>
)

export default ParallaxHero
