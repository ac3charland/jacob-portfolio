import {Event} from '../../reducers/events/types'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'

export interface DBEvent {
    id: number
    title: string
    venueName: string
    streetAddress: string
    city: string
    state: string
    zip: number
    dateTime: string
    published_at: string
    created_at: string
    updated_at: string
}

interface FetchEventsAction {
    type: typeof FETCH_EVENTS
}

interface FetchEventsSuccessAction {
    type: typeof FETCH_EVENTS_SUCCESS
    data: Event[]
}

interface FetchEventsFailureAction {
    type: typeof FETCH_EVENTS_FAILURE
}

export type EventsActionTypes = FetchEventsAction | FetchEventsSuccessAction | FetchEventsFailureAction
