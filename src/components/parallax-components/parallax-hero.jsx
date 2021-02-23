import React from 'react'
import './parallax-hero.scss'
import PropTypes from 'prop-types'

const cb = 'hero'

const ParallaxHero = ({zIndex}) => (
    <div className={cb} style={{zIndex}}>
        <div className={`${cb}__background-layer`}/>
        <div className={`${cb}__hero-title-wrapper`}>
            <div className={`${cb}__hero-title`}>PERCUSSIONIST</div>
            <div className={`${cb}__hero-title`}>RECORDING ARTIST</div>
            <div className={`${cb}__hero-title`}>EDUCATOR</div>
        </div>
    </div>
)

ParallaxHero.propTypes = {
    zIndex: PropTypes.number,
}

export default ParallaxHero
