import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          status: "error",
          message: "RESEND_API_KEY not set",
          env: {
            hasKey: !!process.env.RESEND_API_KEY,
            keyLength: process.env.RESEND_API_KEY?.length || 0,
          },
        },
        { status: 500 }
      );
    }

    // Check if notification email is set
    if (!process.env.NOTIFICATION_EMAIL) {
      return NextResponse.json(
        {
          status: "error",
          message: "NOTIFICATION_EMAIL not set",
          env: {
            hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL,
          },
        },
        { status: 500 }
      );
    }

    // Try to send a test email
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
      to: [process.env.NOTIFICATION_EMAIL],
      subject: "🧪 Test Email from Your Website",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify your Resend setup is working.</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${
          process.env.FROM_EMAIL || "noreply@yourdomain.com"
        }</p>
        <p><strong>To:</strong> ${process.env.NOTIFICATION_EMAIL}</p>
      `,
    });

    return NextResponse.json({
      status: "success",
      message: "Test email sent successfully",
      result: result,
      env: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL,
        fromEmail: process.env.FROM_EMAIL || "noreply@yourdomain.com",
        notificationEmail: process.env.NOTIFICATION_EMAIL,
      },
    });
  } catch (error) {
    console.error("Email test error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send test email",
        error: error instanceof Error ? error.message : String(error),
        env: {
          hasResendKey: !!process.env.RESEND_API_KEY,
          hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL,
          fromEmail: process.env.FROM_EMAIL || "noreply@yourdomain.com",
          notificationEmail: process.env.NOTIFICATION_EMAIL,
        },
      },
      { status: 500 }
    );
  }
}
