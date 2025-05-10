import React from 'react';
import '../Styles/WhyChooseUs.css';
import { motion } from 'framer-motion';
import { FaRocket, FaLock, FaMoneyBillWave } from 'react-icons/fa';

const features = [
    {
        icon: <FaRocket className="feature-icon" />,
        title: 'Fast Process',
        desc: 'Upload your license and get a quote instantly — no delays, no red tape.',
    },
    {
        icon: <FaLock className="feature-icon" />,
        title: 'Secure & Trusted',
        desc: 'Your data and licenses are safe with bank-grade encryption and policies.',
    },
    {
        icon: <FaMoneyBillWave className="feature-icon" />,
        title: 'Best Value',
        desc: 'We offer competitive payouts for unused or extra licenses.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-section">
            <h2 className="why-title">Why Choose SoftSell?</h2>
            <div className="why-cards">
                {features.map((f, index) => (
                    <motion.div
                        className="why-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {f.icon}
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
