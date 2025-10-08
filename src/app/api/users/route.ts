import { NextResponse } from 'next/server'

// Minimal GET handler for users API route.
export async function GET(request: Request) {
	const users = [
		{ id: 1, name: 'Demo User', email: 'demo@example.com' }
	]

	return NextResponse.json(users)
}
