import ContactPage from './contact-page'
jest.mock('../../components/nav-bar/nav-bar', () => () => <></>)

const cb = 'contact'

describe('ContactPage', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<ContactPage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find('#contact').prop('tabIndex')).toEqual(-1)
    })
})
