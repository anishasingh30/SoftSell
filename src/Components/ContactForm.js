import React, { useState } from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        // Reset form
        setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                />
                <select
                    name="licenseType"
                    required
                    value={formData.licenseType}
                    onChange={handleChange}
                >
                    <option value="">Select License Type</option>
                    <option value="software">Software</option>
                    <option value="subscription">Subscription</option>
                    <option value="enterprise">Enterprise</option>
                </select>
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit" className="contact-submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;
