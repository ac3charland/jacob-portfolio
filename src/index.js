import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import HomePage from './pages/home-page/home-page'
import LessonPage from './pages/lesson-page/lesson-page'
import makeStore from './store'
import ContactPage from './pages/contact-page/contact-page'
import {LESSON_PAGE_URL, CONTACT_PAGE_URL} from './utils/constants'

const store = makeStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <div className='content-wrapper'>
          <div className='flex'>
            <NavBar />
            <div className='page-wrapper'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path={LESSON_PAGE_URL} component={LessonPage} />
                <Route exact path={CONTACT_PAGE_URL} component={ContactPage} />
                <Route path='*' component={HomePage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
