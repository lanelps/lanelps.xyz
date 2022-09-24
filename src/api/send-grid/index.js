const sgMail = require(`@sendgrid/mail`);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": `GET,HEAD,POST,OPTIONS`,
  "Access-Control-Max-Age": `86400`
};

const sendGridEmail = async (req, res) => {
  const { email, name, message, subject } = req.body;

  if (req.method === `OPTIONS`) {
    Object.keys(corsHeaders).forEach((key) => {
      res.setHeader(key, corsHeaders[key]);
    });
  }

  if (req.method !== `POST`) {
    return res.status(405).json({
      statusCode: 405,
      body: `Method unsupported: ${req.method}`
    });
  }

  if (!process.env.SENDGRID_API_KEY) {
    console.error(`SENDGRID_API_KEY undefined`);

    return res.status(500).json({ body: `missing information` });
  }

  if (!email) {
    res.status(500).json({ body: `email is undefined` });
  }

  try {
    await sgMail.send({
      to: process.env.SEND_GRID_RECEIVER,
      from: {
        email: process.env.SEND_GRID_SENDER,
        name
      },
      subject,
      replyToList: [
        {
          name,
          email
        }
      ],
      text: message
    });

    res.status(200).json({
      statusCode: 200,
      body: {
        status: `ok`,
        message: `Mailchimp subscription successful`
      }
    });
  } catch (err) {
    console.error(err);

    if (err.response) {
      console.error(err.response.body);
    }

    res.status(400).json({
      statusCode: 400,
      body: {
        status: `failed`,
        message: `Sendgrid post failed. Check server console`
      }
    });
  }
};

export default sendGridEmail;
