import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Create the cities table first
    // Then create the users table
    const result =
      await sql`CREATE TABLE IF NOT EXISTS users(clerkId varchar(255) UNIQUE DEFAULT (requesting_user_id()), cities varchar(255)[] UNIQUE)`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
