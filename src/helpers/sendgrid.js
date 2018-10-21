const sendgridEmail = require('@sendgrid/mail');

sendgridEmail.setApiKey(process.env.SENDGRID_API_KEY);

export default sendgridEmail;
