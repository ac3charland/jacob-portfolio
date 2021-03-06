import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Calendar from './calendar'

const mockStore = configureStore([thunk])
const cb = 'calendar'

describe('Calendar', () => {
    let props, render, store, mockState

    beforeEach(() => {
        mockState = {
            events: {
                events: [
                    {
                        title: 'Left Field Quartet',
                        venue: 'Art Inn',
                        address: '123 Main St',
                        city: 'Madison',
                        state: 'WI',
                        zip: '12345',
                        dateTime: '2020-08-01T04:00:00.000Z',
                    },
                    {
                        title: 'Thompson Springs',
                        venue: 'High Noon Saloon',
                        address: '123 Main St',
                        city: 'Madison',
                        state: 'WI',
                        zip: '12345',
                        dateTime: '2020-08-05T04:00:00.000Z',
                    },
                ],
            },
        }
        store = mockStore(mockState)
        render = (changedProps = {}) => mount(<Provider store={store}><Calendar {...props} {...changedProps} /></Provider>)
    })

    it('correctly displays calendar events', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find('#calendar').prop('tabIndex')).toEqual(-1)
        expect(component.find(`.${cb}__event`).length).toEqual(2)
        expect(component.find(`.${cb}__no-events`).length).toEqual(0)
        expect(component.find(`.${cb}__event`).at(0).text()).toEqual(
            'Left Field Quartet' +
            'Friday, July 31st, 11:00 pm' +
            'Art Inn' +
            '123 Main St' +
            'Madison, WI 12345'
        )
        expect(component.find(`.${cb}__event`).at(1).text()).toEqual(
            'Thompson Springs' +
            'Tuesday, August 4th, 11:00 pm' +
            'High Noon Saloon' +
            '123 Main St' +
            'Madison, WI 12345'
        )
    })

    it('doesn\'t crash with empty props', () => {
        store = mockStore({events: {events: []}})
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__event`).length).toEqual(0)
        expect(component.find(`.${cb}__no-events`).text()).toEqual('No events scheduled')
    })
})
