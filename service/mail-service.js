const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: `"SoundWave" <${process.env.SMTP_USER}>`,
      to,
      subject: "SoundWave account activation",
      html: `<p>Please click <a href="${link}">${link}</a> to activate your account.</p>`,
    });
  }
}

module.exports = new MailService();
