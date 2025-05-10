import React from 'react';
import '../Styles/Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Aarav Mehta',
        role: 'IT Manager',
        company: 'TechBridge Solutions',
        message: 'SoftSell helped us recover value from our unused licenses in days. Super fast and secure!',
    },
    {
        name: 'Sara Iqbal',
        role: 'Procurement Lead',
        company: 'Finzen Inc.',
        message: 'We were amazed at how easy the process was. Excellent support and great payouts.',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-title">What Our Clients Say</h2>
            <div className="testimonial-cards">
                {testimonials.map((t, index) => (
                    <motion.div
                        className="testimonial-card"
                        key={index}
                        initial={{ opacity: 0, x: -50 }}  // Start from an off-screen position with opacity 0
                        animate={{ opacity: 1, x: 0 }}   // Fade in and slide into place
                        transition={{ duration: 0.6, delay: index * 0.2 }}  // Delay between cards
                    >
                        <FaQuoteLeft className="quote-icon" />
                        <p className="testimonial-message">"{t.message}"</p>
                        <p className="testimonial-author">
                            <strong>{t.name}</strong> — {t.role}, {t.company}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
