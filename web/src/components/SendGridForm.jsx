import React, { useState } from 'react'
import axios from 'axios'

export default function SendGridForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
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
    <form onSubmit={formSubmit}>
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
