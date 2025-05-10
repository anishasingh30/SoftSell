import React from 'react';
import '../Styles/HowItWorks.css';
import { FaUpload, FaChartLine, FaMoneyCheckAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <FaUpload className="step-icon" />,
        title: 'Upload License',
        desc: 'Submit your unused license through our secure platform.',
    },
    {
        icon: <FaChartLine className="step-icon" />,
        title: 'Get Valuation',
        desc: 'Receive an instant, market-based valuation of your license.',
    },
    {
        icon: <FaMoneyCheckAlt className="step-icon" />,
        title: 'Get Paid',
        desc: 'Accept the offer and receive payment within 24 hours.',
    },
];

const HowItWorks = () => {
    return (
        <section className="how-section">
            <h2 className="how-title">How It Works</h2>
            <div className="how-steps">
                {steps.map((step, index) => (
                    <motion.div
                        className="how-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        {step.icon}
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
