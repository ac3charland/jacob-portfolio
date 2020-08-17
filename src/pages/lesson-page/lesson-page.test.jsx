import LessonPage from './lesson-page'

const cb = 'lessons'

describe('LessonPage', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<LessonPage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find('#lessons').prop('tabIndex')).toEqual(-1)
        expect(component.find(`.${cb} .form__heading`).text()).toEqual('Let\'s get things started:')
    })
})
