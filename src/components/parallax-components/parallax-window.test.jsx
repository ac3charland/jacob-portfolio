import ParallaxWindow from './parallax-window'

const cb = 'parallax-window'

describe('ParallaxWindow', () => {
    let props, render

    beforeEach(() => {
        props = {
            zIndex: 42,
            positionOffset: 'abc',
        }

        render = (changedProps = {}) => mount(<ParallaxWindow {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('applies style attributes from props', () => {
        const component = render()
        expect(component.find(`.${cb}`).prop('style')).toEqual({zIndex: 42})
        expect(component.find(`.${cb}__image`).prop('style')).toEqual({backgroundPositionY: 'abc'})
    })
})
