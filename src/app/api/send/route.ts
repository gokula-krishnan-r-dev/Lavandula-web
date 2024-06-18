import { Resend } from "resend";
const resend = new Resend("re_V697c5jZ_6sE457E2qrpZqr4YUvt3Qbr8");

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body, "body");

    const { firstName, location, email, phoneNumber, details } = body;

    const submissionDate = new Date().toLocaleString();

    const htmlContent = `
      <html>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
        <p><strong>Submitted on:</strong> ${submissionDate}</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>First Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${firstName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Location:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${location}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone Number:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phoneNumber}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Details:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${details}</td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Ampire <onboarding@resend.dev>",
      to: ["business@lavandula.in"], // Replace with the admin's email address
      subject: "New Contact Form Submission",
      html: htmlContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET(request: any) {
  return new Response(JSON.stringify({ message: "Hello World!" }), {
    status: 200,
  });
}
