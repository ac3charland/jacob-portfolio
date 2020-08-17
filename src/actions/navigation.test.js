import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {onHomePage, leavingHomePage} from './navigation'

const mockStore = configureStore([thunk])

describe('navigation', () => {
    let store
    beforeEach(() => {
        store = mockStore()
    })

    it('dispatches correct action when onHomePage is called', () => {
        store.dispatch(onHomePage())
        expect(store.getActions()).toEqual([{type: 'ON_HOME_PAGE'}])
    })

    it('dispatches correct action when leavingHomePage is called', () => {
        store.dispatch(leavingHomePage())
        expect(store.getActions()).toEqual([{type: 'LEAVING_HOME_PAGE'}])
    })
})
