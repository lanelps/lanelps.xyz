// require('dotenv').config()
// const client = require('@sendgrid/mail')

// const sendEmail = (client, form, senderEmail, senderName) => {
//   console.log('Form', form)
//   // console.log('Sender', senderEmail, senderName)
//   return new Promise((resolve, reject) => {
//     const data = {
//       from: {
//         email: senderEmail,
//         name: senderName,
//       },
//       subject: 'Netlify Function - Sendgrid Email',
//       to: form.email,
//       html: `<h1>${form.name}</h1> <p>${form.message}</p>`,
//     }

//     client
//       .send(data)
//       .then(([response, body]) => {
//         resolve(response)
//       })
//       .catch((err) => reject(err))
//   })
// }

// exports.handler = function (event, context, callback) {
//   const {
//     SENDGRID_API_KEY,
//     SENDGRID_SENDER_EMAIL,
//     SENDGRID_SENDER_NAME,
//   } = process.env

//   const body = JSON.parse(event.body)
//   console.log(body)

//   client.setApiKey(SENDGRID_API_KEY)

//   sendEmail(client, body, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
//     .then((response) => callback(null, { statusCode: response.statusCode }))
//     .catch((err) => callback(err, null))
// }
