import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { getAuth } from '@clerk/nextjs/server';
import { useRouter } from 'next/router'; // Fix: Replace import statement

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { userId } = getAuth(req, {
      secretKey: process.env.NEXT_CLERK_SECRET_KEY,
    });

    console.log(userId);
    const emptyCityCheck =
      await sql`SELECT cities FROM users WHERE clerkId = ${userId}`;

    if (!emptyCityCheck) {
      return NextResponse.json({ status: 401 });
    }

    const body = await req.json();

    const { city } = body;

    const result =
      await sql`UPDATE users SET cities = ARRAY[${city}] || cities WHERE clerkId = ${userId};`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
