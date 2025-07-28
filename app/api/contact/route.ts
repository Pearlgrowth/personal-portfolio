import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Create a Nodemailer transporter using your email service details
    // For Gmail, you'll need to generate an App Password:
    // https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your email service (e.g., 'outlook', 'sendgrid')
      auth: {
        user: process.env.EMAIL_USER, // Your email address (e.g., wanguipearl1@gmail.com)
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "wanguipearl1@gmail.com", // Your email address where you want to receive messages
      subject: `Portfolio Contact: ${subject} from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }
}
