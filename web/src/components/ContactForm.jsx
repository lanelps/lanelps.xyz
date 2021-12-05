import React, { useState, useEffect } from 'react';
import tw, { css } from 'twin.macro';

const ContactForm = () => {
  /*================================================================*/
  /* State */

  const [form, setForm] = useState({
    name: ``,
    email: ``,
    subject: ``,
    message: ``
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /*================================================================*/
  /* useEffect */

  useEffect(() => {}, [isSubmitting]);

  /*================================================================*/
  /* Methods */

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSubmitting(true);

    const response = await fetch(`/api/send-grid`, {
      body: JSON.stringify({
        ...form
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    // .then(res => res.json());

    setIsSubmitting(false);

    console.log(`form submit response`, response);
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
        disabled={isSubmitting}
      />

      <input
        type="email"
        required
        name="email"
        value={form.email}
        placeholder="Email*"
        onChange={handleChange}
        disabled={isSubmitting}
      />

      <input
        type="text"
        required
        name="subject"
        value={form.subject}
        placeholder="Subject*"
        onChange={handleChange}
        disabled={isSubmitting}
      />

      <textarea
        type="text"
        required
        name="message"
        value={form.message}
        placeholder="Message*"
        onChange={handleChange}
        disabled={isSubmitting}
      />

      <input type="submit" value="Send" disabled={isSubmitting} />
    </form>
  );
};

export default ContactForm;
