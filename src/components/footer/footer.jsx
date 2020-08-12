import React from 'react'
import './footer.scss'
import moment from 'moment'
import {ALEX_PORTFOLIO_URL} from '../../utils/constants'

const cb = 'footer'

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__text`}>Copyright &copy; {moment().format('YYYY')} Jacob Bicknase</div>
            <div className={`${cb}__disclaimer`}>Site by <a href={ALEX_PORTFOLIO_URL}>Alex Charland</a></div>
        </div>
    )
}
