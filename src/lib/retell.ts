export async function createWebCall(): Promise<{
  access_token: string;
  call_id: string;
}> {
  const response = await fetch("/api/retell", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to create web call");
  }

  return response.json();
}
