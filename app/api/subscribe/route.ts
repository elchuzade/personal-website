import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Store email in a simple JSON file (you can upgrade to database later)
    const subscribers = await getSubscribers();
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 }
      );
    }

    await addSubscriber(email);

    // Send notification email to you
    try {
      await resend.emails.send({
        from: "noreply@yourdomain.com", // You'll need to verify this domain
        to: [process.env.NOTIFICATION_EMAIL || "your-email@example.com"],
        subject: "🎉 New Mailing List Subscriber!",
        html: `
          <h2>New Subscriber Alert!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p>Someone has subscribed to your mailing list!</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError);
      // Don't fail the subscription if email notification fails
    }

    // Send welcome email to subscriber
    try {
      await resend.emails.send({
        from: "noreply@yourdomain.com", // You'll need to verify this domain
        to: [email],
        subject: "Welcome to Kamran's Mailing List! 🚀",
        html: `
          <h2>Welcome aboard! 🎉</h2>
          <p>Hi there,</p>
          <p>Thanks for subscribing to my mailing list! I'm excited to share insights about startups and entrepreneurship with you.</p>
          <p><strong>What you'll get:</strong></p>
          <ul>
            <li>📝 Notifications when I publish new blog posts</li>
            <li>💡 Opportunities to share insights about startups I work with</li>
            <li>🚀 Exclusive startup and tech insights</li>
          </ul>
          <p>Stay tuned for valuable content coming your way!</p>
          <p>Best regards,<br>Kamran</p>
        `,
      });
    } catch (welcomeEmailError) {
      console.error("Failed to send welcome email:", welcomeEmailError);
      // Don't fail the subscription if welcome email fails
    }

    return NextResponse.json(
      {
        message: "Successfully subscribed! Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Simple file-based storage (you can upgrade to database later)
async function getSubscribers(): Promise<string[]> {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const filePath = path.join(process.cwd(), "data", "subscribers.json");

    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  } catch {
    return [];
  }
}

async function addSubscriber(email: string): Promise<void> {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "subscribers.json");

    // Create data directory if it doesn't exist
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {}

    const subscribers = await getSubscribers();
    subscribers.push(email);

    await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
  } catch (error) {
    console.error("Failed to save subscriber:", error);
  }
}
