import HomePage from './home-page'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Calendar from '../../components/calendar/calendar'
import ParallaxWindow from '../../components/parallax-components/parallax-window'
jest.mock('../../components/nav-bar/nav-bar', () => () => <></>)

const mockStore = configureStore([thunk])
const cb = 'home'

describe('HomePage', () => {
    let props, render, store 

    beforeEach(() => {
        store = mockStore({
            app: {},
            events: {
                events: ['a', 'b', 'c'],
            },
        })
        render = (changedProps = {}) => mount(<Provider store={store}><HomePage {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('shows calendar section and parallax divider when there are events', () => {
        const component = render()
        expect(component.find(Calendar).length).toEqual(1)
        expect(component.find(ParallaxWindow).length).toEqual(2)
    })

    it('suppresses calendar section and its parallax divider when there are no events', () => {
        store = mockStore({
            app: {},
            events: {
                events: [],
            },
        })
        const component = render()
        expect(component.find(Calendar).length).toEqual(0)
        expect(component.find(ParallaxWindow).length).toEqual(1)
    })
})
