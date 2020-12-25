import {EventsActionTypes, FETCH_EVENTS, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS} from '../../actions/events/types'
import {EventsState} from './types'

const initialState: EventsState = {
    events: [],
}

export function events(state = initialState, action: EventsActionTypes): EventsState {
    if (action) {
        switch (action.type) {
            case FETCH_EVENTS:
                return {...state, fetchingEvents: true}
            case FETCH_EVENTS_SUCCESS:
                return {...state, fetchingEvents: false, events: action.data, fetched: true}
            case FETCH_EVENTS_FAILURE:
                return {...state, fetchingEvents: false, fetchEventError: true}
        }
    }

    return state  
}
