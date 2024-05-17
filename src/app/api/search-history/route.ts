// 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { getAuth } from '@clerk/nextjs/server';
import { createClient } from '@vercel/postgres';

export async function GET(req: NextRequest, res: NextResponse) {
  const client = createClient();
  await client.connect();
  const { userId } = getAuth(req, {
    secretKey: process.env.NEXT_CLERK_SECRET_KEY,
  });

  try {
    const { rows } =
      await sql`SELECT DISTINCT (cities) FROM users WHERE clerkid = ${userId};`;

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await client.end();
  }
}
