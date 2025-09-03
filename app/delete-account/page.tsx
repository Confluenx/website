"use client"
import React, { useState } from 'react'

function page() {
  const [contactMethod, setContactMethod] = useState('email')
  const [contactValue, setContactValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle deletion request logic here
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Account Delete Request
        </h1>
        <p className="mb-6 text-gray-600 text-center">
          We're sorry to see you go. Please provide your email or phone number associated with your account to initiate the deletion process.
        </p>
        {submitted ? (
          <div className="text-green-600 mb-4 text-center">
            Your request has been submitted. We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="font-medium block mb-2 text-gray-700">
                Contact Method
              </label>
              <div className="flex gap-8 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={contactMethod === 'email'}
                    onChange={() => setContactMethod('email')}
                    className="form-radio"
                  />
                  Email
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={contactMethod === 'phone'}
                    onChange={() => setContactMethod('phone')}
                    className="form-radio"
                  />
                  Phone Number
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label className="font-medium block mb-2 text-gray-700">
                {contactMethod === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <input
                type={contactMethod === 'email' ? 'email' : 'tel'}
                placeholder={contactMethod === 'email' ? 'your@email.com' : 'Your phone number'}
                value={contactValue}
                onChange={e => setContactValue(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 rounded-md font-semibold text-base transition"
            >
              Request Deletion
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default page