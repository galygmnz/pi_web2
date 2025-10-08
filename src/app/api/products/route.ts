import { NextResponse } from 'next/server'

// Minimal GET handler so this file is a valid module for Next.js App Router API routes.
// Replace the placeholder data with real DB calls or business logic as needed.
export async function GET(request: Request) {
	// Example placeholder response
	const products = [
		{ id: 1, name: 'Demo Product', price: 0 },
	]

	return NextResponse.json(products)
}

// Optionally export other method handlers (POST, PUT, DELETE) when needed.
