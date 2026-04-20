export type Booking = {
  id: string
  name: string
  from: string
  to: string
  date: string
  status: "Pending" | "Confirmed" | "Completed"
  packageType: string
}

export type Company = {
  id: string
  name: string
  rating: number
  price: number
  location: string
}

export type User = {
  id: string
  name: string
  email: string
}

export type Package = {
  id: string
  title: string
  price: number
  description: string
  features: string[]
}