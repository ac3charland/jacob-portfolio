import Axios from 'axios'
import {Dispatch} from 'react'
import {FETCH_EVENTS, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS, EventsActionTypes, DBEvent} from './types'
import moment from 'moment'

export function fetchEvents() {
    return (dispatch: Dispatch<EventsActionTypes>): Promise<void> => {
        dispatch({type: FETCH_EVENTS})

        return Axios.get('/api/events')
            .then(res => {
                const rawEvents: DBEvent[] = res.data?.events
                const events = rawEvents
                    // Filter out dates that have already occurred
                    .filter(event => moment(event.dateTime).isAfter())
                    // Remove unnecessary DB keys like id and timestamps
                    .map(event => {
                        const {title, venueName, streetAddress, city, state, zip, dateTime} = event
                        return {
                            title,
                            venue: venueName,
                            address: streetAddress,
                            city,
                            state,
                            zip,
                            dateTime,
                        }
                    })
                dispatch({type: FETCH_EVENTS_SUCCESS, data: events})
            })
            .catch(() => {
                dispatch({type: FETCH_EVENTS_FAILURE})
            })
    }
}
