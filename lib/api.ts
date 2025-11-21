export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function sendOpinion(data: any) {
  const res = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error enviando opinión");
  return res.json();
}

export async function getOpinions(limit: number, offset: number = 0) {
  const res = await fetch(`${API_URL}/opinions?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error("Error obteniendo opiniones");
  return res.json();
}