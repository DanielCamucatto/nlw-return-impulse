import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer' 

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1f7bcbecd230b2",
      pass: "fb951e4b9cdc19"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body} : SendMailData){
        await transport.sendMail({
                  from: 'Equipe Feedget <Oi @feedget.com>', 
                  to: 'Daniel Camuçatto <daniel.camucatto@gmail.com>', 
                  subject: subject,
                  html: body,
              })
    }
}