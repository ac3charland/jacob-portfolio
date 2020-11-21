import React from 'react'
import PropTypes from 'prop-types'
import './parallax-wrapper.scss'

const ParallaxWrapper = props => (
    <div className='parallax__group parallax__solid parallax__group--solid'>
        <div className='parallax__layer parallax__layer--base'>
            {props.children}
        </div>
    </div>
)

ParallaxWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
}

export default ParallaxWrapper
