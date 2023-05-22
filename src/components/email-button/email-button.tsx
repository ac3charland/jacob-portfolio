import React from 'react'
import './email-button.scss'

const cb = 'email-button'

const EmailButton = (): JSX.Element => (
  <a href='mailto:jabicknase@gmail.com' className={cb}>
    Email Me To Get Started
  </a>
)

export default EmailButton
