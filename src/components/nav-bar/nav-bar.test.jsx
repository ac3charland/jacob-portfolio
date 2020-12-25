import NavBar from './nav-bar'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const mockStore = configureStore([thunk])
const cb = 'navbar'

describe('NavBar', () => {
    let props, render, store, mockState

    beforeEach(() => {
        mockState = {
            app: {},
            events: {
                events: ['a', 'b', 'c'],
            },
        }
        props = {}
        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<Provider store={store}><NavBar {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(5)
        expect(component.find(`.${cb} button`).length).toEqual(1)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('/#calendar')
        expect(component.find(`.${cb}__link`).at(1).prop('href')).toEqual('/#media')
        expect(component.find(`.${cb}__link`).at(2).prop('href')).toEqual('/lessons')
        expect(component.find(`.${cb}__link`).at(3).prop('href')).toEqual('/contact')
    })

    it('renders on home page with scroll buttons without crashing', () => {
        store = mockStore({
            ...mockState,
            app: {onHomePage: true},
        })
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(3)
        expect(component.find(`.${cb} button`).length).toEqual(3)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).at(2).prop('href')).toEqual('/lessons')
        expect(component.find(`.${cb}__link`).at(3).prop('href')).toEqual('/contact')
    })

    it('toggles between open and closed', () => {
        const component = render()

        expect(component.find('button.closed').length).toEqual(1)
        expect(component.find('button.open').length).toEqual(0)
        expect(component.find('.fa-bars').length).toEqual(1)
        expect(component.find('.fa-times').length).toEqual(0)

        component.find('.icon').simulate('click')
        
        expect(component.find('button.closed').length).toEqual(0)
        expect(component.find('button.open').length).toEqual(1)
        expect(component.find('.fa-bars').length).toEqual(0)
        expect(component.find('.fa-times').length).toEqual(1)
    })

    it('suppresses calendar link when there are no events', () => {
        store = mockStore({
            ...mockState,
            events: {events: []},
        })

        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(4)
        expect(component.find(`.${cb} button`).length).toEqual(1)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).at(0).prop('href')).toEqual('/#media')
        expect(component.find(`.${cb}__link`).at(1).prop('href')).toEqual('/lessons')
        expect(component.find(`.${cb}__link`).at(2).prop('href')).toEqual('/contact')
    })

    it('suppresses calendar button when there are no events', () => {
        store = mockStore({
            app: {onHomePage: true},
            events: {events: []},
        })

        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb} a`).length).toEqual(3)
        expect(component.find(`.${cb} button`).length).toEqual(2)
    })
})
