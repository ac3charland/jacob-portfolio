import {combineReducers} from 'redux'
import {app} from './app/app'
import {events} from './events/events'

export default combineReducers({
    app,
    events,
})
