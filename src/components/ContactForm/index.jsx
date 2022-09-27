import React, { useState, useEffect } from "react";
import tw from "twin.macro";

const Container = tw.form`w-full flex flex-col mt-[-0.625rem] font-main text-main`;
const Input = tw.input`w-full relative py-2.5 border-b border-white bg-transparent disabled:opacity-30 placeholder:(opacity-100 text-grey uppercase) font-main text-main text-white transition-colors`;
const TextArea = tw.textarea`w-full relative min-h-[20vh] py-2.5 border-b border-white bg-transparent disabled:opacity-30 placeholder:(opacity-100 text-grey uppercase) font-main text-main text-white transition-colors`;

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
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        name="name"
        value={form.name}
        placeholder="Name*"
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <Input
        type="email"
        required
        name="email"
        value={form.email}
        placeholder="Email*"
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <Input
        type="text"
        required
        name="subject"
        value={form.subject}
        placeholder="Subject*"
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <TextArea
        type="text"
        required
        name="message"
        value={form.message}
        placeholder="Message*"
        onChange={handleChange}
        disabled={isSubmitting}
      />
      <Input
        type="submit"
        value={submitText}
        disabled={isSubmitting}
        css={[
          tw`w-max cursor-pointer border-none`,
          formSubmitted && tw`text-orange`
        ]}
      />
    </Container>
  );
};

export default ContactForm;
