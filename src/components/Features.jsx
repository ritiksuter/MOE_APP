import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-600">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center">
                        <div className="text-6xl text-blue-600 mb-4">⚡</div>
                        <h3 className="text-xl font-bold">Efficient Energy</h3>
                        <p className="mt-2 text-gray-600">Our systems provide the highest energy efficiency for your home.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl text-blue-600 mb-4">🌞</div>
                        <h3 className="text-xl font-bold">Sustainable Power</h3>
                        <p className="mt-2 text-gray-600">We use environmentally friendly and renewable energy sources.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl text-blue-600 mb-4">💰</div>
                        <h3 className="text-xl font-bold">Cost Effective</h3>
                        <p className="mt-2 text-gray-600">Save money on electricity bills by switching to solar energy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
