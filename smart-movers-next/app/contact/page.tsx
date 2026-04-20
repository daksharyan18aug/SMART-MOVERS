"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!name || !email || !message) { alert("Please fill all fields."); return }
    setSent(true)
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📬 Contact Us</h1>
        <p className="text-gray-500 mb-8">Have questions? We're here to help 24/7.</p>

        {sent ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center">
            <p className="text-2xl mb-2">✅</p>
            <p className="font-semibold text-lg">Message Sent!</p>
            <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="How can we help?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button onClick={handleSend}
              className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
              Send Message
            </button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}