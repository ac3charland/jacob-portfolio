import React from 'react'
import PropTypes from 'prop-types'
import './parallax-hero.scss'

const cb = 'hero'

const ParallaxHero = () => (
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
)

export default ParallaxHero
