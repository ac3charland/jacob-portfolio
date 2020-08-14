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
})
