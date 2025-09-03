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
    <div style={{
      maxWidth: 400,
      margin: '20 auto',
      padding: '2rem',
      fontFamily: 'inherit'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
        Account Delete Request
      </h1>
      <p style={{ marginBottom: '2rem', color: '#374151' }}>
        We're sorry to see you go. Please provide your email or phone number associated with your account to initiate the deletion process.
      </p>
      {submitted ? (
        <div style={{ color: 'green', marginBottom: '1rem' }}>
          Your request has been submitted. We will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>
              Contact Method
            </label>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={contactMethod === 'email'}
                  onChange={() => setContactMethod('email')}
                />
                Email
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={contactMethod === 'phone'}
                  onChange={() => setContactMethod('phone')}
                />
                Phone Number
              </label>
            </div>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>
              {contactMethod === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <input
              type={contactMethod === 'email' ? 'email' : 'tel'}
              placeholder={contactMethod === 'email' ? 'your@email.com' : 'Your phone number'}
              value={contactValue}
              onChange={e => setContactValue(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontSize: '1rem'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#06b6d4',
              color: '#fff',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Request Deletion
          </button>
        </form>
      )}
    </div>
  )
}

export default page