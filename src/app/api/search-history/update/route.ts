import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { getAuth } from '@clerk/nextjs/server';
import { useRouter } from 'next/router'; // Fix: Replace import statement

export async function PUT(req: NextRequest, res: NextResponse, query: string) {
  try {
    const { userId } = getAuth(req, {
      secretKey: process.env.NEXT_CLERK_SECRET_KEY,
    });

    const emptyCityCheck =
      await sql`SELECT cities FROM users WHERE clerkId = ${userId}`;
    console.log(emptyCityCheck);

    const city: string = query;

    if (!emptyCityCheck) {
      return NextResponse.json({ status: 401 });
    }

    const result =
      await sql`INSERT INTO user_cities (clerkId, city) VALUES (${userId}, ${city})`; // Fix: Use the city variable in the SQL query
    await sql`INSERT INTO user_cities WHERE clerkId = ${userId} (city) VALUES ('NewYork')`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
