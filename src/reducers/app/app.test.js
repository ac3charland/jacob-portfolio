import {app} from './app'
import {ON_HOME_PAGE, LEAVING_HOME_PAGE} from '../../utils/constants'

describe('App Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets onHomePage flag to true when ON_HOME_PAGE is received', () => {
        const newState = app(state, {type: ON_HOME_PAGE})
        expect(newState).toEqual({a: 'b', onHomePage: true})
    })

    it('sets onHomePage flag to undefined when LEAVING_HOME_PAGE is received', () => {
        const newState = app({...state, onHomePage: true}, {type: LEAVING_HOME_PAGE})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles unknown action', () => {
        const newState = app(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles empty action', () => {
        const newState = app(state)
        expect(newState).toEqual({a: 'b'})
    })
})
