import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    // Simple authentication - you can improve this later
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: subscribers, error } = await supabase
      .from("subscribers")
      .select("email, subscribed_at, status")
      .order("subscribed_at", { ascending: false });

    if (error) {
      console.error("Error fetching subscribers:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({
      count: subscribers?.length || 0,
      subscribers: subscribers || [],
    });
  } catch (error) {
    console.error("Error getting subscribers:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
