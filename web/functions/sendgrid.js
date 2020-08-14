require('dotenv').config()
const client = require('@sendgrid/mail')

const sendEmail = (client, form, senderEmail, senderName) => {
  return new Prommise((resolve, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName,
      },
      subject: 'Netlify Function - Sendgrid Email',
      to: `${form.email}`,
      html: `Hey, you\'ve sent an email from Netlify Functions<br/>Message: ${message}`,
    }

    client
      .send(data)
      .then(([response, body]) => {
        resolve(response)
      })
      .catch((err) => reject(err))
  })
}

exports.handler = function (event, context, callback) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME,
  } = process.env

  const body = JSON.parse(event.body)
  const form = body.form

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(client, form, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
    .then((response) => callback(null, { statusCode: response.statusCode }))
    .catch((err) => callback(err, null))
}
