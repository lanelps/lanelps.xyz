import React, { useState } from 'react'

export default function SendGridForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const formSubmit = async (event) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then((res) => {
        if (res.status === 200) {
          setForm({ name: '', email: '', message: '' })
          console.log('Success!', res.status)
        }
      })
      .catch((err) => {
        setForm({ name: '', email: '', message: '' })
        console.error(err)
      })
  }

  return (
    <form
      onSubmit={formSubmit}
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <input type='hidden' name='form-name' value='contact' />
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        name='name'
        value={form.name}
        onChange={handleInputChange}
      />

      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleInputChange}
      />

      <label htmlFor='message'>Message:</label>
      <input
        type='text'
        name='message'
        value={form.message}
        onChange={handleInputChange}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}
