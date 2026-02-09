import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY?.trim();
  const agentId = process.env.RETELL_AGENT_ID?.trim();

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://api.retellai.com/v2/create-web-call",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: agentId,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Retell API error:", errorData);
      return NextResponse.json(
        { error: "Failed to create web call" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (error) {
    console.error("Error creating web call:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
