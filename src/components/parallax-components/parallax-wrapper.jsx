import React from 'react'
import PropTypes from 'prop-types'
import './parallax-wrapper.scss'

const cb = 'parallax-wrapper'

const ParallaxWrapper = props => (
    <div className={cb}>
        {props.children}
    </div>
)

ParallaxWrapper.propTypes = {
    children: PropTypes.element,
}

export default ParallaxWrapper
