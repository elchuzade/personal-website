import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // Test basic connection and table access
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .limit(1);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        {
          status: "error",
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        },
        { status: 500 }
      );
    }

    // Try to insert a test record
    const { data: insertData, error: insertError } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: "Test User",
          email: "test@example.com",
          subject: "Test Message",
          message: "This is a test message to verify the table works.",
          status: "new",
        },
      ])
      .select();

    if (insertError) {
      console.error("Insert test error:", insertError);
      return NextResponse.json(
        {
          status: "error",
          message: "Table exists but insert failed",
          error: insertError.message,
          code: insertError.code,
        },
        { status: 500 }
      );
    }

    // Clean up test record
    if (insertData && insertData[0]) {
      await supabase
        .from("contact_messages")
        .delete()
        .eq("id", insertData[0].id);
    }

    return NextResponse.json({
      status: "success",
      message: "Contact table is working correctly",
      tableExists: true,
      canInsert: true,
      canSelect: true,
      sampleData: data,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Unexpected error occurred",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
