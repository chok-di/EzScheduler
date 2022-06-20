const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (email,title,description) => {
  console.log("send email called")
    const msg = {
      to: `${email}`,
      from: 'no-reply@ezscheduler.ca',
      subject: `${title}`,
      text: `${description}`
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      });
}

module.exports = { sendEmail };