import {API} from 'aws-amplify'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchEvents} from './fetch-events'

const mockStore = configureStore([thunk])

describe('navigation', () => {
    let store
    beforeEach(() => {
        store = mockStore()
        API.get = jest.fn(() => Promise.resolve({
            events: [
                {
                    id: 0,
                    title: 'Past Event',
                    venueName: 'b',
                    streetAddress: 'c',
                    city: 'd',
                    state: 'e',
                    zip: 12345,
                    dateTime: '2012-12-14T18:00:00-0700',
                    created_at: '1993-10-15T19:00:00-0700',
                },
                {
                    id: 0,
                    title: 'Future Event',
                    venueName: 'b',
                    streetAddress: 'c',
                    city: 'd',
                    state: 'e',
                    zip: 12345,
                    dateTime: '3030-12-14T18:00:00-0700',
                    created_at: '1993-11-14T19:00:00-0700',
                },
            ],
        }))
    })

    it('dispatches correct action when fetchEvents is called and filters out past events and extra object data', () => {
        return store.dispatch(fetchEvents()).then(() => {
            expect(API.get).toHaveBeenCalledWith('api', '/events', null)
            expect(store.getActions()).toEqual([
                {type: 'FETCH_EVENTS'},
                {
                    type: 'FETCH_EVENTS_SUCCESS', data: [
                        {
                            title: 'Future Event',
                            venue: 'b',
                            address: 'c',
                            city: 'd',
                            state: 'e',
                            zip: 12345,
                            dateTime: '3030-12-14T18:00:00-0700',
                        },
                    ]},
            ])
        })
    })

    it('handles API error', () => {
        API.get = jest.fn(() => Promise.reject())
        return store.dispatch(fetchEvents()).then(() => {
            expect(store.getActions()).toEqual([
                {type: 'FETCH_EVENTS'},
                {type: 'FETCH_EVENTS_FAILURE'},
            ])
        })
    })
})
