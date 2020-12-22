export interface Album {
    isLarge: boolean
    src: string
    href: string
    text: string
}

export interface Video {
    src: string
}

export interface Event {
    title: string
    venue: string
    address: string
    city: string
    state: string
    zip: number
    dateTime: string
}

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

export interface Action {
    type: string
    data?: any
}
