import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

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

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from("subscribers")
      .select("email")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Error checking existing subscriber:", checkError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 }
      );
    }

    // Add new subscriber
    const { error: insertError } = await supabase.from("subscribers").insert([
      {
        email,
        subscribed_at: new Date().toISOString(),
        status: "active",
      },
    ]);

    if (insertError) {
      console.error("Error inserting subscriber:", insertError);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    // Get your verified domain from environment
    const fromEmail = process.env.FROM_EMAIL || "noreply@yourdomain.com";
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!notificationEmail) {
      console.error("NOTIFICATION_EMAIL environment variable not set");
    }

    // Send notification email to you
    if (notificationEmail) {
      try {
        // Get total subscriber count for notification
        const { count: totalSubscribers } = await supabase
          .from("subscribers")
          .select("*", { count: "exact", head: true });

        const notificationResult = await resend.emails.send({
          from: fromEmail,
          to: [notificationEmail],
          subject: "🎉 New Mailing List Subscriber!",
          html: `
            <h2>New Subscriber Alert!</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p>Someone has subscribed to your mailing list!</p>
            <p><strong>Total subscribers:</strong> ${totalSubscribers || 0}</p>
          `,
        });
        console.log("Notification email sent:", notificationResult);
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Don't fail the subscription if email notification fails
      }
    }

    // Send welcome email to subscriber
    try {
      const welcomeResult = await resend.emails.send({
        from: fromEmail,
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
      console.log("Welcome email sent:", welcomeResult);
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
