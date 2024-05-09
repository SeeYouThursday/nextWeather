import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { userId } = getAuth(req, {
      secretKey: process.env.NEXT_CLERK_SECRET_KEY,
    });
    const result = await sql`INSERT INTO Users (clerkid) VALUES (${userId});`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
