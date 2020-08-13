import React, {useState} from 'react'
import './contact-form.scss'

const cb = 'form'
interface ContactFormProps {
    title?: string
}

interface FormElementProps {
    id: string
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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }
    return (
        <div className={cb}>
            {title && <h2 className={`${cb}__heading`}>{title}</h2>}
            <form className={`${cb}__form`} onSubmit={handleSubmit}>
                <FormElement
                    id={`${cb}__name`}
                    title='Your Name'
                    type='text'
                    value={name}
                    changeHandler={(e): void => setName(e.currentTarget.value)}
                    isInvalid={false}
                    errorMsg='Please enter a name.'
                />
                <FormElement
                    id={`${cb}__email`}
                    title='Email'
                    type='email'
                    value={email}
                    changeHandler={(e): void => setEmail(e.currentTarget.value)}
                    isInvalid={false}
                    errorMsg='Please enter a valid email.'
                />
                <FormElement
                    id={`${cb}__subject`}
                    title='Subject'
                    type='text'
                    value={subject}
                    changeHandler={(e): void => setSubject(e.currentTarget.value)}
                    isInvalid={false}
                    errorMsg='Please enter a subject.'
                />
                <FormElement
                    isTextArea
                    id={`${cb}__message`}
                    title='Message'
                    type='text'
                    value={message}
                    changeHandler={(e): void => setMessage(e.currentTarget.value)}
                    isInvalid={false}
                    errorMsg='Please enter a message.'
                />
                <div className={`${cb}__form-element`}>
                    <input className={`${cb}__submit`} type='submit' value='Send Message' />
                </div>
            </form>
        </div>
    )
}

const FormElement = (props: FormElementProps): JSX.Element => {
    const {id, title, type, value, changeHandler, isTextArea, isInvalid, errorMsg} = props
    return (
        <div className={`${cb}__form-element`}>
            <label className={`${cb}__label`} htmlFor={id}><strong>{title}</strong></label>
            {isTextArea ?
                <textarea
                    className={`${cb}__input`}
                    id={id}
                    rows={4}
                    name={title}
                    value={value}
                    onChange={changeHandler}
                /> :
                <input
                    className={`${cb}__input`}
                    id={id}
                    type={type}
                    name={title}
                    value={value}
                    onChange={changeHandler}
                />}
            {isInvalid && <h3 className={`${cb}__error ${cb}__name-error-msg`}>{errorMsg}</h3>}
        </div>
    )
}

export default ContactForm
