import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './calendar.scss'
import {CALENDAR_ID} from '../../utils/constants'
import {useSelector} from 'react-redux'

const cb = 'calendar'

const Calendar = () => {
    const events = useSelector(state => state.events.events)
    return (
        <div id='backstop-calendar' className={cb}>
            <div className={`${cb}__content-wrapper`}>
                <h2 id={CALENDAR_ID} tabIndex={-1} className={`${cb}__heading`}>
                    <span className={`${cb}__heading-background`}>Calendar</span>
                </h2>
                {events.length > 0 ?
                    events.map((event, idx) => <Event key={`${cb}-event-${idx}`} {...event} />) :
                    <h3 className={`${cb}__no-events`}>No events scheduled</h3>
                }
            </div>
        </div>
    )
}

const Event = ({title, venue, address, city, state, zip, dateTime}) => (
    <div className={`${cb}__event`}>
        <div className={`${cb}__event-title-wrapper`}>
            <h3 className={`${cb}__event-heading`}>{title}</h3>
            <h4 className={`${cb}__event-date-time`}>{moment(dateTime).format('dddd, MMMM Do, h:mm a')}</h4>
        </div>
        <div className={`${cb}__event-venue-wrapper`}>
            <h4 className={`${cb}__event-venue`}>{venue}</h4>
            <h4 className={`${cb}__event-address`}>{address}</h4>
            <h4 className={`${cb}__event-address`}>{city}, {state} {zip}</h4>
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

export default Calendar
