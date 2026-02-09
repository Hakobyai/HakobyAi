import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.RETELL_API_KEY?.trim();
  const agentId = process.env.RETELL_AGENT_ID?.trim();

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { phone_number } = body;

    if (!phone_number) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.retellai.com/v2/create-phone-call",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_number: process.env.RETELL_PHONE_NUMBER,
          to_number: phone_number,
          override_agent_id: agentId,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Retell API error:", errorData);
      return NextResponse.json(
        { error: "Failed to initiate call" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      call_id: data.call_id,
      status: "call_initiated",
    });
  } catch (error) {
    console.error("Error creating phone call:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
