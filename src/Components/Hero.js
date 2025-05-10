import React, { useContext } from 'react';
import '../Styles/Hero.css';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Hero = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <motion.section className="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} >
            <img src="assets/logo.png" alt="SoftSell Logo" className="logo" />

            <div className="hero-container">
                <h1 className="hero-title">
                    Sell Unused Software Licenses for Instant Value
                </h1>
                <p className="hero-subtitle">
                    SoftSell helps you turn idle software licenses into cash — fast, secure, and hassle-free.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="hero-button">
                        Get a Free Quote
                    </a>
                    <button onClick={toggleTheme} className="theme-toggle-button">
                        {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
