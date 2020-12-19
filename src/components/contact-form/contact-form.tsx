import React, {useState} from 'react'
import './contact-form.scss'
import {validateEmail, validateRequiredString, validateName} from '../../utils/form-validation'
import Axios from 'axios'
import {CONTACT_SUCCESS_URL, GOOGLE_PRIVACY_POLICY, GOOGLE_TERMS} from '../../utils/constants'
import {Redirect} from 'react-router-dom'
import Spinner from '../spinner/spinner'

const cb = 'form'

declare global {
    interface Window {
        grecaptcha: ReCaptchaInstance
        captchaOnLoad: () => void
    }
}

interface ReCaptchaInstance {
    ready: (cb: () => any) => void
    execute: (key: string, options: ReCaptchaExecuteOptions) => Promise<string>
    render: (id: string, options: ReCaptchaRenderOptions) => any
}

interface ReCaptchaExecuteOptions {
    action: string
}

interface ReCaptchaRenderOptions {
    sitekey: string
    size: 'invisible'
}

interface ContactFormProps {
    title?: string
}

interface FormElementProps {
    idString: string
    title: string
    type: string
    value: string
    isTextArea?: boolean
    isInvalid: boolean
    errorMsg: string
    changeHandler: (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ContactForm = (props: ContactFormProps): JSX.Element => {
    const {title} = props
    const [name, setName] = useState({value: '', isInvalid: false})
    const [email, setEmail] = useState({value: '', isInvalid: false})
    const [subject, setSubject] = useState({value: '', isInvalid: false})
    const [message, setMessage] = useState({value: '', isInvalid: false})
    const [success, setSuccess] = useState(false)
    const [captchaError, setCaptchaError] = useState(false)
    const [otherError, setOtherError] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)


    const isFormValid = (): boolean => {
        const isNameValid = validateName(name.value)
        const isEmailValid = validateEmail(email.value)
        const isSubjectValid = validateRequiredString(subject.value)
        const isMessageValid = validateRequiredString(message.value)

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            setName({...name, isInvalid: !isNameValid})
            setEmail({...email, isInvalid: !isEmailValid})
            setSubject({...subject, isInvalid: !isSubjectValid})
            setMessage({...message, isInvalid: !isMessageValid})
            return false
        }
        return true
    }

    const sendMessage = (token: string): void => {
        const body = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            token,
        }
        Axios.post('/api/contact', body)
            .then(res => {
                setShowSpinner(false)
                if (res.data.msg === 'success') {
                    setSuccess(true)
                }
                else if (res.data.msg === 'captcha failed') {
                    setCaptchaError(true)
                }
                else {
                    setOtherError(true)
                }
            })
            .catch(() => {
                setShowSpinner(false)
                setOtherError(true)
            })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        if (isFormValid()) {
            window.grecaptcha.ready(() => {
                setShowSpinner(true)
                setOtherError(false)
                setCaptchaError(false)
                window.grecaptcha.execute(process.env.REACT_APP_PUBLIC_KEY || '', {action: 'contact'})
                    .then((token: string) => {
                        sendMessage(token)
                    })
                    .catch(() => {
                        setOtherError(true)
                        setShowSpinner(false)
                    })
            })
        }
    }

    if (success) {
        return <Redirect to={CONTACT_SUCCESS_URL} />
    }

    return (
        <div className={cb}>
            {title && <h2 className={`${cb}__heading`}>{title}</h2>}
            <form className={`${cb}__form`} onSubmit={handleSubmit}>
                <FormElement
                    idString={`${cb}__name`}
                    title='Your Name'
                    type='text'
                    value={name.value}
                    changeHandler={(e): void => setName({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={name.isInvalid}
                    errorMsg='Please enter a valid name.'
                />
                <FormElement
                    idString={`${cb}__email`}
                    title='Email'
                    type='text'
                    value={email.value}
                    changeHandler={(e): void => setEmail({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={email.isInvalid}
                    errorMsg='Please enter a valid email.'
                />
                <FormElement
                    idString={`${cb}__subject`}
                    title='Subject'
                    type='text'
                    value={subject.value}
                    changeHandler={(e): void => setSubject({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={subject.isInvalid}
                    errorMsg='Please enter a subject.'
                />
                <FormElement
                    isTextArea
                    idString={`${cb}__message`}
                    title='Message'
                    type='text'
                    value={message.value}
                    changeHandler={(e): void => setMessage({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={message.isInvalid}
                    errorMsg='Please enter a message.'
                />
                <div className={`${cb}__submit-wrapper`}>
                    <input className={`${cb}__submit`} type='submit' value='Send Message' />
                    {showSpinner && <Spinner />}
                </div>
                <div className={`${cb}__captcha-terms`}>This site is protected by reCAPTCHA and the Google <a href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</a> and <a href={GOOGLE_TERMS}>Terms of Service</a> apply.</div>
                {captchaError && <h3 className={`${cb}__error ${cb}__api-error-msg`}>Our reCaptcha has mistaken you for a bot. Don't worry: just try submitting again.</h3>}
                {otherError && <h3 className={`${cb}__error ${cb}__api-error-msg`}>An error occurred while sending your message. Please try again.</h3>}
            </form>
        </div>
    )
}

const FormElement = (props: FormElementProps): JSX.Element => {
    const {idString, title, type, value, changeHandler, isTextArea, isInvalid, errorMsg} = props
    return (
        <div className={`${cb}__form-element`}>
            <label className={`${cb}__label`} htmlFor={idString}><strong>{title}</strong></label>
            {isTextArea ?
                <textarea
                    className={`${cb}__input`}
                    id={idString}
                    rows={4}
                    name={title}
                    value={value}
                    onChange={changeHandler}
                /> :
                <input
                    className={`${cb}__input`}
                    id={idString}
                    type={type}
                    name={title}
                    value={value}
                    onChange={changeHandler}
                />}
            {isInvalid && <h3 className={`${cb}__error ${idString}-error`}>{errorMsg}</h3>}
        </div>
    )
}

export default ContactForm
