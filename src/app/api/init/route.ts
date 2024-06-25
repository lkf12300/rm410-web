import client from "../../server/client";

export async function GET(request: Request, response: Response) {
  const result = await client.db.Auth();
  return Response.json(result);
}
