// ─── Contact.jsx ──────────────────────────────────────────────
// CONCEPTS USED: useState, event handling, controlled inputs,
//                form validation, conditional rendering
//
// This is the most feature-rich component in the workshop.
// It demonstrates:
//   1. Controlled form inputs (input value lives in state)
//   2. Real-time validation (errors appear on blur)
//   3. A success message shown after "sending" (simulated)
//   4. Loading state on the submit button
//
// 🔧 WORKSHOP TASKS:
//   1. Update the email / social links to YOUR real contacts
//   2. Optionally wire up a real form service like Formspree

import { useState } from 'react'
import './Feedback.css'

// ── Contact info items — update with YOUR details ─────────────
const CONTACT_INFO = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'alex@example.com',
    href: 'mailto:alex@example.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/yourhandle',
    href: 'https://github.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Istanbul, Turkey',
    href: null,   // No link for location
  },
]

// ── Initial form state — all fields start empty ───────────────
const INITIAL_FORM = {
  name:    '',
  email:   '',
  subject: '',
  message: '',
}

// ── Simple validators ─────────────────────────────────────────
function validate(fields) {
  const errors = {}
  if (!fields.name.trim())
    errors.name = 'Please enter your name'
  if (!fields.email.trim())
    errors.email = 'Please enter your email'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Please enter a valid email address'
  if (!fields.subject.trim())
    errors.subject = 'Please enter a subject'
  if (!fields.message.trim())
    errors.message = 'Please enter your message'
  else if (fields.message.trim().length < 20)
    errors.message = 'Message must be at least 20 characters'
  return errors
}

// ── Contact component ─────────────────────────────────────────
function Contact() {
  // All form field values live here in state
  const [form, setForm]         = useState(INITIAL_FORM)

  // Validation errors keyed by field name
  const [errors, setErrors]     = useState({})

  // Whether to show errors (only after the user touches a field)
  const [touched, setTouched]   = useState({})

  // Controls the loading spinner on the button
  const [loading, setLoading]   = useState(false)

  // Show the success message when form is "submitted"
  const [submitted, setSubmitted] = useState(false)

  // ── Handlers ────────────────────────────────────────────────

  // Called on every keystroke — updates the right field in state
  function handleChange(e) {
    const { name, value } = e.target
    const updatedForm = { ...form, [name]: value }
    setForm(updatedForm)

    // Re-validate in real time after the field has been touched
    if (touched[name]) {
      setErrors(validate(updatedForm))
    }
  }

  // Called when a field loses focus — marks it as "touched"
  function handleBlur(e) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(form))
  }

  // Called when the form is submitted
  async function handleSubmit(e) {
    e.preventDefault()  // Prevent the default page reload

    // Mark ALL fields as touched so all errors show
    setTouched({ name: true, email: true, subject: true, message: true })

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return   // Stop here — don't submit if there are errors
    }

    // Simulate an API call (replace with a real service like Formspree)
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm(INITIAL_FORM)
    setTouched({})
    setErrors({})
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <section id="contact" className="contact">
      <div className="section-wrapper">

        <h2 className="section-title">
          Get In <span className="accent">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you!
        </p>

        <div className="contact__grid">

          {/* ── Left: Contact info ───────────────────────── */}
          <div className="contact__info">
            <p className="contact__info-intro">
              I'm currently open to freelance projects and internship
              opportunities. Response time: usually within 24 hours.
            </p>

            <div className="contact__info-items">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="contact__info-item">
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact__info-value contact__info-value--link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Contact Form ──────────────────────── */}
          <div className="contact__form-wrap">

            {/* Success message — shown after submission */}
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">🎉</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn--outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              /* The form — only shown when not yet submitted */
              <form className="contact__form" onSubmit={handleSubmit} noValidate>

                {/* Name + Email row */}
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">
                      Name <span className="contact__required">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`contact__input ${
                        touched.name && errors.name ? 'contact__input--error' : ''
                      }`}
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && (
                      <span className="contact__error">{errors.name}</span>
                    )}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">
                      Email <span className="contact__required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`contact__input ${
                        touched.email && errors.email ? 'contact__input--error' : ''
                      }`}
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <span className="contact__error">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="contact__field">
                  <label htmlFor="subject" className="contact__label">
                    Subject <span className="contact__required">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={`contact__input ${
                      touched.subject && errors.subject ? 'contact__input--error' : ''
                    }`}
                    placeholder="Internship opportunity / Project collaboration / Just saying hi"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.subject && errors.subject && (
                    <span className="contact__error">{errors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">
                    Message <span className="contact__required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`contact__input contact__textarea ${
                      touched.message && errors.message ? 'contact__input--error' : ''
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="contact__char-count">
                    {form.message.length} characters
                    {form.message.length > 0 && form.message.length < 20 && (
                      <span> (minimum 20)</span>
                    )}
                  </div>
                  {touched.message && errors.message && (
                    <span className="contact__error">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="contact__spinner" />
                      Sending...
                    </>
                  ) : (
                    'Send Message 🚀'
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
