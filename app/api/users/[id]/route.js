import { NextResponse } from "next/server";

export function GET(_, response) {
  const id = response.params.id;

  return NextResponse.json({ id });
}
