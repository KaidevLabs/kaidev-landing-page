"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Send, CalendarCheck } from "lucide-react"
import {BookAppointmentButton} from "./ui/book-appointment-button"

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
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="text-center">
          <div className="prose prose-lg max-w-none text-warmWhite prose-headings:text-warmWhite prose-p:text-warmWhite/80">
            <div className="mt-12">
              <p>
                Ready to evolve your software? Contact us to discuss how we can help improve your digital products.
              </p>
              <p>
                Whether you're looking to build a new software solution, improve an existing one, or simply want to
                discuss how we can help your business, we're here to help.
              </p>
              <BookAppointmentButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
