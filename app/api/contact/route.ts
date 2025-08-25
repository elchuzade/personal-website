import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Store contact message in Supabase
    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError) {
      console.error("Error inserting contact message:", insertError);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    // Send notification email to you
    const fromEmail = process.env.FROM_EMAIL || "noreply@elchuzade.com";
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (notificationEmail) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: [notificationEmail],
          subject: `📧 New Contact Form Message: ${subject}`,
          html: `
            <h2>New Contact Form Message</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p>This message has been stored in your Supabase database.</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Don't fail the contact submission if email notification fails
      }
    }

    // Send confirmation email to the person who contacted you
    try {
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: `Message Received: ${subject}`,
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p>I typically respond within 24 hours during business days.</p>
          <p>Best regards,<br>Kamran</p>
        `,
      });
    } catch (confirmationEmailError) {
      console.error(
        "Failed to send confirmation email:",
        confirmationEmailError
      );
      // Don't fail the contact submission if confirmation email fails
    }

    return NextResponse.json(
      {
        message:
          "Message sent successfully! Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
