// src/components/LandingPage.js

import React from 'react';

// Landing Page Component
const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center py-6 px-10">
                <div className="text-3xl font-bold text-green-400">MOE</div>
                <nav className="space-x-6 text-lg">
                    <a href="#home" className="hover:text-green-400">Home</a>
                    <a href="#about" className="hover:text-green-400">About</a>
                    <a href="#services" className="hover:text-green-400">Services</a>
                    <a href="#contact" className="hover:text-green-400">Contact</a>
                </nav>
                <a
                    href="#get-started"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition duration-300"
                >
                    Get Started
                </a>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center justify-center flex-grow px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    Empowering Tomorrow, Today.
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    Innovative solutions for a smarter future.
                </p>
                <a
                    href="#explore"
                    className="bg-green-400 text-gray-900 font-bold text-xl px-8 py-4 rounded-full hover:bg-green-500 transition duration-300"
                >
                    Explore Our Vision
                </a>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-800">
                <h2 className="text-center text-4xl font-bold mb-10">What Sets Us Apart</h2>
                <div className="flex justify-center gap-10 flex-wrap">
                    <FeatureCard
                        title="Innovation"
                        description="Driving forward with cutting-edge technology to redefine what's possible."
                    />
                    <FeatureCard
                        title="Sustainability"
                        description="Our solutions are designed with the environment in mind for a sustainable future."
                    />
                    <FeatureCard
                        title="Technology"
                        description="State-of-the-art technology that empowers businesses and individuals alike."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-6">
                <div className="flex justify-center space-x-10 text-green-400">
                    <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                    <a href="#terms" className="hover:text-white">Terms of Service</a>
                    <a href="#social" className="hover:text-white">Follow Us</a>
                </div>
            </footer>
        </div>
    );
};

// Feature Card Component
const FeatureCard = ({ title, description }) => {
    return (
        <div className="bg-gray-700 text-center p-6 rounded-lg shadow-lg max-w-xs hover:bg-gray-600 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

export default LandingPage;
