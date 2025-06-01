"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Send, CalendarCheck } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real implementation, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-graphiteCore text-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Get in <span className="text-kaidevTeal">Touch</span>
          </h2>
          <p className="text-lg text-warmWhite/80 max-w-2xl mx-auto">
            Ready to evolve your software? Contact us to discuss how we can help improve your digital products.
          </p>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="prose prose-lg max-w-none text-warmWhite prose-headings:text-warmWhite prose-p:text-warmWhite/80">
              <h3 className="font-heading font-medium text-2xl mb-6">Contact Information</h3>

              <div className="lg:space-y-6 flex flex-row gap-6 justify-between lg:flex-col">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-kaidevTeal mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mt-0">Email</h4>
                    <p className="text-warmWhite/80">info@kaidev.io</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-kaidevTeal mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mt-0">Phone</h4>
                    <p className="text-warmWhite/80">+34 717 715 330</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CalendarCheck className="h-6 w-6 text-kaidevTeal mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mt-0">Calendly</h4>
                    <p className="text-warmWhite/80">
                      <a href="https://cal.com/kaidev/60min" target="_blank" className="text-kaidevTeal hover:underline">
                        Schedule a Call
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-heading font-medium text-2xl mb-6">Let's Connect</h3>
                <p>
                  Whether you're looking to build a new software solution, improve an existing one, or simply want to
                  discuss how we can help your business, we're here to help.
                </p>
                <p>Fill out the form, and our team will get back to you within 24 hours.</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-inkCharcoal rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-warmWhite/90 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-graphiteCore border border-warmWhite/20 rounded-md focus:outline-none focus:ring-2 focus:ring-kaidevTeal text-warmWhite"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-warmWhite/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-graphiteCore border border-warmWhite/20 rounded-md focus:outline-none focus:ring-2 focus:ring-kaidevTeal text-warmWhite"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-warmWhite/90 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-graphiteCore border border-warmWhite/20 rounded-md focus:outline-none focus:ring-2 focus:ring-kaidevTeal text-warmWhite"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-4 rounded-md ${
                      submitStatus.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-kaidevTeal text-warmWhite rounded-md font-medium transition-all hover:bg-kaidevTeal/90 focus:outline-none focus:ring-2 focus:ring-kaidevTeal focus:ring-offset-2 focus:ring-offset-graphiteCore disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
