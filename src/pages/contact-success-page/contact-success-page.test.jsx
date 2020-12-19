import ContactSuccessPage from './contact-success-page'
jest.mock('../../components/nav-bar/nav-bar', () => () => <></>)

const cb = 'contact-success'

describe('ContactSuccessPage', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<ContactSuccessPage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find('#contact-success').prop('tabIndex')).toEqual(-1)
    })
})
