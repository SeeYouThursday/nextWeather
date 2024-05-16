import { NextRequest, NextResponse } from 'next/server';
import { sql, createClient } from '@vercel/postgres';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const client = createClient();
  await client.connect();

  try {
    const { userId } = getAuth(req, {
      secretKey: process.env.NEXT_CLERK_SECRET_KEY,
    });

    const body = await req.json();

    const { city } = body;

    console.log(body, 'body');
    const { rows } =
      await sql`UPDATE users SET cities = array_append(cities, ${city}) WHERE clerkId = ${userId};`;

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await client.end();
  }
}
