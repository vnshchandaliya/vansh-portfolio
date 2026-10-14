
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Send,
} from "lucide-react";
 

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Website Design",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) {
      setStatus("");
      setStatusType("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");
    setStatusType("");

    try {
      await emailjs.send(
        "service_e58mybn",
        "template_r0xbplg",
        formData,
        "LMAP_a4_nD0UFDuqV"
      );

      setStatus("Thanks for reaching out! I'll get back to you soon.");
      setStatusType("success");
      setFormData(initialForm);
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus(
        "Your message could not be sent. Please try again or email me directly."
      );
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            LET'S CONNECT
          </span>

          <h2 className="font-display contact-heading">
            Have a project
            <br />
            <span className="italic">in mind?</span>
          </h2>

          <p className="font-body contact-subtitle">
            Tell me a little about your idea. Let's turn it into
            something thoughtful, useful and beautifully built.
          </p>
        </div>

        {/* Main panel */}
        <div className="contact-grid">
          {/* Left editorial panel */}
          <div className="contact-intro-panel">
            <div className="contact-intro-top">
              <span className="contact-small-label">
                FROM IDEA TO LAUNCH
              </span>

              <ArrowUpRight size={22} strokeWidth={1.4} />
            </div>

            <div className="contact-art" aria-hidden="true">
              <div className="contact-art-orbit contact-art-orbit-one" />
              <div className="contact-art-orbit contact-art-orbit-two" />

              <div className="contact-art-core">
                <span>V</span>
              </div>

              <span className="contact-art-star contact-art-star-one">✳</span>
              <span className="contact-art-star contact-art-star-two">✳</span>
              <span className="contact-art-dot" />
            </div>

            <div className="contact-intro-copy">
              <span className="contact-small-label">A GOOD PLACE TO START</span>

              <h3 className="font-display">
                Good work starts with a conversation.
              </h3>

              <p className="font-body">
                Whether you need a business website, a high-converting
                landing page or a custom admin dashboard, let's discuss
                what you're building.
              </p>
            </div>

            <div className="contact-divider" />

            <a
              href="mailto:vanshweb73@gmail.com"
              className="contact-email-link font-body"
            >
              <span>Prefer email?</span>
              <span className="contact-email-action">
                Write to me <ArrowUpRight size={16} />
              </span>
            </a>

            
          </div>

          {/* Form panel */}
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span className="contact-small-label">PROJECT INQUIRY</span>
              <h3 className="font-display">Let's talk details.</h3>
              <p className="font-body">
                Fill in the details below and I'll be in touch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-fields-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                  />
                </div>
              </div>

              <div className="contact-fields-row">
                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Optional"
                    autoComplete="tel"
                    maxLength={30}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">Service needed *</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option>Website Design</option>
                    <option>Admin Dashboard / Panel</option>
                    <option>Landing Page</option>
                    <option>E-Commerce Website</option>
                    <option>Website Maintenance</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>
              </div>

           

              <div className="contact-field">
                <label htmlFor="contact-message">Tell me about your project *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you looking to build?"
                  rows={4}
                  required
                  maxLength={3000}
                />
              </div>

              <button
                type="submit"
                className="contact-submit font-body"
                disabled={isSending}
              >
                <span>{isSending ? "Sending..." : "Send inquiry"}</span>
                <Send size={17} />
              </button>

              {status && (
                <div
                  className={`contact-status ${statusType}`}
                  role="status"
                  aria-live="polite"
                >
                  {statusType === "success" && <CheckCircle2 size={18} />}
                  <span>{status}</span>
                </div>
              )}

              <p className="contact-privacy font-body">
                Your project details will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <span className="font-body">Have an idea? Let's make it real.</span>
          <a href="/work" className="font-body">
            Explore my work <ArrowDownRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
