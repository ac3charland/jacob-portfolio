import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './calendar.scss'
import {CALENDAR_ID} from '../../utils/constants'

const cb = 'calendar'

const Calendar = ({events}) => (
    <div className={cb}>
        <div className={`${cb}__content-wrapper`}>
            <h2 id={CALENDAR_ID} tabIndex={-1} className={`${cb}__heading`}>Calendar</h2>
            {events ?
                events.map((event, idx) => <Event key={`${cb}-event-${idx}`} {...event} />) :
                <h3 className={`${cb}__no-events`}>No events scheduled</h3>
            }
        </div>
    </div>
)

Calendar.propTypes = {
    events: PropTypes.array,
}

const Event = ({title, venue, address, city, state, zip, dateTime}) => (
    <div className={`${cb}__event`}>
        <h3 className={`${cb}__event-heading`}>{title}</h3>
        <h4 className={`${cb}__event-date-time`}>{moment(dateTime).format('dddd, MMMM Do, h:mm a')}</h4>
        <div className={`${cb}__event-venue-wrapper`}>
            <h4 className={`${cb}__event-venue`}>{venue}</h4>
            <h4>{address}</h4>
            <h4>{city}, {state} {zip}</h4>
        </div>
    </div>
)


Event.propTypes = {
    title: PropTypes.string,
    venue: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    dateTime: PropTypes.string,
}

export const mockEvents = [
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
]

export default Calendar
