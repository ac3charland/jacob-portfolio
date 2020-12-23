import {events} from './events'
import {FETCH_EVENTS, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE} from '../../actions/events/types'

describe('Events Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets onHomePage flag to true when FETCH_EVENTS is received', () => {
        const newState = events(state, {type: FETCH_EVENTS})
        expect(newState).toEqual({a: 'b', fetchingEvents: true})
    })

    it('sets fetchingEvents flag to false and adds events to state when FETCH_EVENTS_SUCCESS is received', () => {
        const newState = events({...state, fetchingEvents: true}, {type: FETCH_EVENTS_SUCCESS, data: ['a', 'b', 'c']})
        expect(newState).toEqual({a: 'b', fetchingEvents: false, events: ['a', 'b', 'c']})
    })

    it('sets fetchingEvents flag to false and fetchEventError flag to true when FETCH_EVENTS_FAILURE is received', () => {
        const newState = events({...state, fetchingEvents: true}, {type: FETCH_EVENTS_FAILURE})
        expect(newState).toEqual({a: 'b', fetchingEvents: false, fetchEventError: true})
    })

    it('handles unknown action', () => {
        const newState = events(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles empty action', () => {
        const newState = events(state)
        expect(newState).toEqual({a: 'b'})
    })
})
