import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Create the cities table first
    await sql`CREATE TABLE IF NOT EXISTS cities(city varchar(255) primary key, state varchar(50), zipcode INT);`;

    // Then create the users table
    await sql`CREATE TABLE IF NOT EXISTS users(clerkId varchar(255) DEFAULT (requesting_user_id()), cities varchar(255)[]);`;

    // Create a junction table to represent the many-to-many relationship between users and cities
    const result =
      await sql`CREATE TABLE IF NOT EXISTS user_cities(clerkId varchar(255) references users(clerkId), city varchar(255) references cities(city), primary key (clerkId, city));`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
