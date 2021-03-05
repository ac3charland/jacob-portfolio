import React from 'react'
import './parallax-hero.scss'
import PropTypes from 'prop-types'
import useProgressiveImg from '../../hooks/use-progressive-image'
import smallImage from '../../images/hero-small.jpg'
import largeImage from '../../images/hero-bw.jpeg'

const cb = 'hero'

const ParallaxHero = ({zIndex}) => {
    
    const [src] = useProgressiveImg(smallImage, largeImage)

    return (
        <div className={cb} style={{zIndex}}>
            <div className={`${cb}__background-layer`} style={{backgroundImage: `url(${src})`}} />
            <div className={`${cb}__hero-title-wrapper`}>
                <div className={`${cb}__hero-title`}>PERCUSSIONIST</div>
                <div className={`${cb}__hero-title`}>RECORDING ARTIST</div>
                <div className={`${cb}__hero-title`}>EDUCATOR</div>
            </div>
        </div>
    )
}

ParallaxHero.propTypes = {
    zIndex: PropTypes.number,
}

export default ParallaxHero
