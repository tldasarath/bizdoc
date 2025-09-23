import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submit
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // WhatsApp integration instead of backend
      const { name, email, subject, message } = formData;

      const phoneNumber = "971551642244"; // WhatsApp number (no +, no spaces)
      const text = `Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        text
      )}`;

      window.open(whatsappUrl, "_blank");

      if (window.fbq) {
        window.fbq("track", "Lead"); // Facebook Pixel event
      }

      setFormMessage("Opening WhatsApp ✅");
      setIsError(false);

      // reset form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // remove message after 3 seconds
      setTimeout(() => {
        setFormMessage("");
      }, 3000);
    } catch (err) {
      console.error(err);
      setFormMessage("Something went wrong ❌");
      setIsError(true);

      setTimeout(() => {
        setFormMessage("");
      }, 3000);
    }
  };



  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a
                 
                >
                  +971 4 570 7920 

                </a>
                <br />
                <a
                  href="https://wa.me/971524740055"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971 52 474 0055
                </a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>
                  Union Coop, Basement B 02, Al Twar 1, Near Dafza Metro, Dubai,
                  UAE
                </p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>
                  <a href="mailto:info@bizdoc.ae">info@bizdoc.ae</a>
                </p>
              </div>
              <div className="social-icon mt-50">
               <a
                                   href="https://www.facebook.com/profile.php?id=61579783263789"
                                   className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                 >
                                   <FaFacebookF className="text-gray-500 transition-all duration-300 group-hover:text-[#1877F2] text-xl" />
                                 </a>
                  <a
                                    href="https://x.com/bizdoc_official"
                                    className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <SiX className="text-gray-500 transition-all duration-300 group-hover:text-black text-xl" />
                                  </a>
                <a
                                   href="https://www.linkedin.com/company/107069996/admin/dashboard/"
                                   className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                 >
                                   <FaLinkedinIn className="text-gray-500 transition-all duration-300 group-hover:text-[#0A66C2] text-xl" />
                                 </a>
                <a
                                    href="https://www.instagram.com/bizdoc_official?igsh=azNjamsweDRvaGw1"
                                    className="social-link group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer relative z-40"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FaInstagram className="text-gray-500 transition-all duration-300 group-hover:text-[#E4405F] text-xl" />
                                  </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-30">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1 ">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>

              {/* Intro Text */}
              <p className="mb-40">
                At Bizdoc, we are ready to support you with all your business
                needs. Whether it’s company setup, visas, PRO services, or legal
                assistance, our team is here to guide you.{" "}
                <strong>Get in touch with us today.</strong>
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="form2">
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && (
                        <small className="text-danger">{errors.subject}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>

                    {/* Success/Error message above button */}
                    {formMessage && (
                      <div
                        className={`mb-3 ${isError ? "text-danger" : "text-success"} text-center`}
                        style={{ fontWeight: "600" }}
                      >
                        {formMessage}
                      </div>
                    )}

                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&lsquo;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
