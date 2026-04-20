import { NextResponse } from "next/server"

const bookings = [
  { id: "1", name: "Daksh Aryan", from: "Delhi", to: "Bangalore", status: "Confirmed" },
  { id: "2", name: "Rahul Singh", from: "Mumbai", to: "Pune", status: "Pending" },
]

export async function GET() {
  return NextResponse.json(bookings)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newBooking = { id: Date.now().toString(), ...body }
  bookings.push(newBooking)
  return NextResponse.json(newBooking, { status: 201 })
}