import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/home-page/home-page'
import LessonPage from './pages/lesson-page/lesson-page'
import ContactPage from './pages/contact-page/contact-page'
import ContactSuccessPage from './pages/contact-success-page/contact-success-page'
import {LESSON_PAGE_URL, CONTACT_PAGE_URL, CONTACT_SUCCESS_URL} from './utils/constants'
import {fetchEvents} from './actions/events/fetch-events'
import {useSelector, useDispatch} from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    const fetchEventError = useSelector(state => state.events.fetchEventError)
    const eventsFetched = useSelector(state => state.events.fetched)

    useEffect(() => {
        if (!fetchEventError && !eventsFetched) {
            dispatch(fetchEvents())
        }
    }, [])

    return (
        <div className='content-wrapper'>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path={LESSON_PAGE_URL} component={LessonPage} />
                <Route exact path={CONTACT_SUCCESS_URL} component={ContactSuccessPage} />
                <Route exact path={CONTACT_PAGE_URL} component={ContactPage} />
                <Route path='*' component={HomePage} />
            </Switch>
        </div>
    )
}

export default App
