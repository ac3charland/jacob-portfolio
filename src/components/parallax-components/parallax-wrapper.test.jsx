import ParallaxWrapper from './parallax-wrapper'
import React from 'react'

const cb = 'parallax-wrapper'

describe('ParallaxWrapper', () => {
    let props, render

    beforeEach(() => {
        props = {
            children: [
                <span key={0}/>,
                <span key={1}/>,
                <span key={2}/>,
            ],
        }

        render = (changedProps = {}) => mount(<ParallaxWrapper {...props} {...changedProps} />)
    })

    it('renders without crashing with correct number of children', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find('span').length).toEqual(3)
    })
})
