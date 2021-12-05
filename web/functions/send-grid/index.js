const corsHeaders = {
  'Access-Control-Allow-Origin': 'http://localhost:8000',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400'
};

addEventListener('fetch', event => {
  const { request } = event;
  const { method } = request;

  if (method === 'OPTIONS') {
    // Handle CORS preflight requests
    event.respondWith(handleOptions(request));
  } else if (method === 'POST') {
    event.respondWith(handlePost(request));
    return;
  } else {
    event.respondWith(
      new Response(`Method unsupported: ${request.method}`, {
        status: 500
      })
    );
    return;
  }
});

/*
 * HANDLE OPTIONS REQUEST
 * */
function handleOptions({ headers }) {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    // If you want to check or reject the requested method + headers
    // you can do that here.
    const respHeaders = {
      ...corsHeaders,
      // Allow all future content Request headers to go back to browser
      // such as Authorization (Bearer) or X-Client-Name-Version
      'Access-Control-Allow-Headers': headers.get(
        'Access-Control-Request-Headers'
      )
    };

    return new Response(null, {
      headers: respHeaders
    });
  } else {
    // Handle standard OPTIONS request.
    // If you want to allow other HTTP Methods, you can do that here.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS'
      }
    });
  }
}

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

  console.log(`reqBody`, reqBody);

  try {
    await sendEmail({
      email: reqBody.email,
      message: reqBody.message,
      name: reqBody.name,
      subject: reqBody.subject
    });

    return new Response('Form Submitted!', {
      statusText: 'OK',
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error(`Form Submission Error: `, err);

    return new Response('There was an error submitting the form.', {
      status: 400,
      headers: corsHeaders
    });
  }
}

async function sendEmail({ email, name, message, subject }) {
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
        email: `hello@lanelps.xyz`,
        name
      },
      subject,
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
