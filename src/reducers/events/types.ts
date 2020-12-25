export interface Event {
    title: string
    venue: string
    address: string
    city: string
    state: string
    zip: number
    dateTime: string
}

export interface EventsState {
    fetchingEvents?: boolean
    fetchEventError?: boolean
    fetched?: boolean
    events: Event[]
}
