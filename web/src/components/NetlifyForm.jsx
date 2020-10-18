import React from 'react'
import useFormValidation from '../hooks/useFormValidation'

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
}

const validateForm = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.message) {
    errors.message = 'Required'
  }

  return errors
}

const sendForm = async (values, setValues, initialState) => {
  const encode = (data) => {
    const encoded = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')

    return encoded
  }

  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...values }),
  })
    // await fetch('httpstat.us/200', { method: 'GET' })
    .then((res) => {
      if (res.status === 200) {
        setValues(initialState)
        console.log('Form Submit Success!', res.status)
      }
    })
    .catch((err) => {
      setValues(initialState)
      console.error('Form Submit Error!', err)
    })
}

export default function NetlifyForm() {

  const { formSubmit, handleInputChange, handleBlur, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateForm, sendForm)

  return (
    <form
      className='netlify-form'
      onSubmit={formSubmit}
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <input type='hidden' name='form-name' value='contact' />

      <div className="form___input-container">
        <input
          name='name'
          value={values.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder='Name*'
          className={`form___input ${errors.name && 'error-input'}`}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="form___input-container">
        <input
          name='email'
          value={values.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder='Email*'
          className={`form___input ${errors.email && 'error-input'}`}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form___input-container">
        <textarea
          name='message'
          value={values.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder='Message*'
          className={`form___input ${errors.message && 'error-input'}`}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <button disabled={isSubmitting} type='submit' className={Object.keys(errors).length !== 0 && 'error'}>Send</button>
    </form>
  )
}
