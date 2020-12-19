import ContactForm from './contact-form'

const cb = 'form'

describe('ContactForm', () => {
    let render, props

    beforeEach(() => {
        props = {
            title: 'Wire me $10,000!',
        }
        render = (changedProps = {}) => mount(<ContactForm {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__heading`).text()).toEqual('Wire me $10,000!')
    })

    it('suppresses header when no title is provided', () => {
        props = undefined
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__heading`).length).toEqual(0)
    })

    it('shows correct validation copy', () => {
        const component = render()
        component.find(`.${cb}__form`).simulate('submit')
        expect(component.find(`.${cb}__name-error`).text()).toEqual('Please enter a valid name.')
        expect(component.find(`.${cb}__subject-error`).text()).toEqual('Please enter a subject.')
        expect(component.find(`.${cb}__email-error`).text()).toEqual('Please enter a valid email.')
        expect(component.find(`.${cb}__message-error`).text()).toEqual('Please enter a message.')
    })
    
})
