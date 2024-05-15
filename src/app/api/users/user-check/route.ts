import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const userId = await req.json();

    const { rows, fields } =
      await sql`SELECT * FROM users WHERE userId = ${userId}`;

    console.log(rows, 'empty check');

    if (userId) {
      const result = await sql`INSERT INTO Users (clerkId) VALUES (${userId}) `;
      return NextResponse.json({ result }, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
