import React, { useState, useEffect } from "react";
import tw, { css, theme } from "twin.macro";

const ContactForm = () => {
  /*= =============================================================== */
  /* State */

  const [form, setForm] = useState({
    name: ``,
    email: ``,
    subject: ``,
    message: ``
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [submitText, setSubmitText] = useState(`Submit`);

  /*= ================================================================ */
  /* useEffect */

  useEffect(() => {
    if (isSubmitting) {
      setSubmitText(`Submiting...`);
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (formSubmitted) {
      setSubmitText(`Sent!`);
    } else {
      setSubmitText(`Submit`);
    }
  }, [formSubmitted]);

  /*= =============================================================== */
  /* Methods */

  const clearForm = () => {
    setForm({
      name: ``,
      email: ``,
      subject: ``,
      message: ``
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    await fetch(`/api/send-grid`, {
      body: JSON.stringify({
        ...form
      }),
      headers: {
        "Content-Type": `application/json`
      },
      method: `POST`
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error(error);
        clearForm();
        setIsSubmitting(false);
        setFormSubmitted(false);
      });

    clearForm();
    setIsSubmitting(false);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      tw="w-full flex flex-col font-main text-heading md:text-heading-md"
    >
      <input
        type="text"
        required
        name="name"
        value={form.name}
        placeholder="Name*"
        onChange={handleChange}
        disabled={isSubmitting}
        tw="mb-20 bg-white dark:bg-black border-b border-black dark:border-white disabled:opacity-30 transition-colors duration-400"
      />
      <input
        type="email"
        required
        name="email"
        value={form.email}
        placeholder="Email*"
        onChange={handleChange}
        disabled={isSubmitting}
        tw="mb-20 bg-white dark:bg-black border-b border-black dark:border-white disabled:opacity-30 transition-colors duration-400"
      />
      <input
        type="text"
        required
        name="subject"
        value={form.subject}
        placeholder="Subject*"
        onChange={handleChange}
        disabled={isSubmitting}
        tw="mb-20 bg-white dark:bg-black border-b border-black dark:border-white disabled:opacity-30 transition-colors duration-400"
      />
      <textarea
        type="text"
        required
        name="message"
        value={form.message}
        placeholder="Message*"
        onChange={handleChange}
        disabled={isSubmitting}
        tw="mb-20 bg-white dark:bg-black border-b border-black dark:border-white disabled:opacity-30 transition-colors duration-400"
      />
      <input
        type="submit"
        value={submitText}
        disabled={isSubmitting}
        css={[
          tw`w-max bg-white dark:bg-black disabled:opacity-30 cursor-pointer transition-colors duration-400`,
          formSubmitted && tw`text-blue`
        ]}
      />
    </form>
  );
};

export default ContactForm;
