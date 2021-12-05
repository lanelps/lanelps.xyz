import React, { useState, useEffect } from 'react';
import tw, { css } from 'twin.macro';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: ``,
    email: ``,
    subject: ``,
    message: ``
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8787/`, {
      body: JSON.stringify({
        ...form
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      css={[
        tw`w-full flex flex-col font-main text-heading`,
        css`
          input {
            border-bottom: 1px solid black;
          }
        `
      ]}
    >
      <input
        type="text"
        required
        name="name"
        value={form.name}
        placeholder="Name*"
        onChange={handleChange}
      />

      <input
        type="email"
        required
        name="email"
        value={form.email}
        placeholder="Email*"
        onChange={handleChange}
      />

      <input
        type="text"
        required
        name="subject"
        value={form.subject}
        placeholder="Subject*"
        onChange={handleChange}
      />

      <textarea
        type="text"
        required
        name="message"
        value={form.message}
        placeholder="Message*"
        onChange={handleChange}
      />

      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
