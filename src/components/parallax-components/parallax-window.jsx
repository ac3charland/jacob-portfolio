import React from 'react'
import PropTypes from 'prop-types'
import './parallax-window.scss'

const cb = 'parallax-window'

const ParallaxWindow = ({zIndex, positionOffset, yOffset}) => (
    <div className={cb} style={{zIndex}}>
        <div className={`${cb}__image`} style={{backgroundPositionY: positionOffset}}/>
    </div>
)

ParallaxWindow.propTypes = {
    zIndex: PropTypes.number,
    positionOffset: PropTypes.string,
    yOffset: PropTypes.string,
}

export default ParallaxWindow
