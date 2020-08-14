import React, { useState } from 'react'
import axios from 'axios'

export default function SendGridForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const formSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios
        .post('/.netlify/functions/sendgrid', form)
        .then((res) => console.log(res))
    } catch (e) {
      console.error(e)
    }
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
