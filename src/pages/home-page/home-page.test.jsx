import HomePage from './home-page'

const cb = 'home'

describe('HomePage', () => {
    let props, render

    beforeEach(() => {
        render = (changedProps = {}) => mount(<HomePage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
