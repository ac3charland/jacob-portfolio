import {API} from 'aws-amplify'
import {Dispatch} from 'react'
import {FETCH_EVENTS, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS, EventsActionTypes, DBEvent} from './types'
import moment from 'moment'
import {API_NAME, EVENTS_ROUTE, NGROK_PORT} from '../../utils/constants'

export function fetchEvents() {
    return (dispatch: Dispatch<EventsActionTypes>): Promise<void> => {
        dispatch({type: FETCH_EVENTS})

        // For localdev, modify NGROK_PORT constant to allow exposing localhost
        const customInit = NGROK_PORT ? {queryStringParameters: {ngrokPort: NGROK_PORT}} : null

        return API.get(API_NAME, EVENTS_ROUTE, customInit)
            .then(res => {
                const rawEvents: DBEvent[] = res.events
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
