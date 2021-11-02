addEventListener('fetch', event => {
  const { request } = event;
  const { method } = request;

  if (method !== 'POST') {
    event.respondWith(
      new Response(`Method unsupported: ${request.method}`, {
        status: 500
      })
    );
    return;
  }

  event.respondWith(handlePost(request));
});
/*
 * HANDLE POST REQUEST
 * */
async function handlePost(request) {
  const reqBody = await request.json();

  if (!SENDGRID_API_KEY) {
    console.error(`SENDGRID_API_KEY undefined`);

    return new Response('missing information', {
      status: 500
    });
  }

  if (!reqBody.email) {
    return new Response('email is undefined', {
      status: 500
    });
  }

  try {
    await sendEmail({
      email: reqBody.email,
      message: reqBody.message,
      name: reqBody.name
    });

    return new Response('Form Submitted!', {
      statusText: 'OK',
      status: 200
    });
  } catch (err) {
    console.error(`Form Submission Error: `, err);

    return new Response('There was an error submitting the form.', {
      status: 400
    });
  }
}

async function sendEmail({ email, name, message }) {
  return await fetch('https://api.sendgrid.com/v3/mail/send', {
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: `lanelps@gmail.com`
            }
          ]
        }
      ],
      from: {
        email: `lanelps@gmail.com`,
        name: name
      },
      subject: `New Contact Form Submission From ${name}`,
      reply_to: {
        email
      },
      content: [
        {
          type: `text/plain`,
          value: message
        }
      ]
    }),
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });
}
