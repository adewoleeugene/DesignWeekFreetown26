import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Waitlist";

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error("Missing Airtable environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

    const res = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: name,
              Email: email,
              "Phone Number": phone,
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Airtable error:", errorData);
      return NextResponse.json(
        { error: "Failed to save your information. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
