import React from 'react';

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen flex items-center justify-center text-center bg-gray-100" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?solar')" }}>
            <div className="bg-white bg-opacity-80 p-10 rounded-md shadow-md">
                <h1 className="text-4xl font-bold text-blue-600">Power Your Home with Solar Energy</h1>
                <p className="mt-4 text-gray-600">Efficient, affordable, and sustainable energy solutions.</p>
                <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">Learn More</button>
            </div>
        </section>
    );
};

export default Hero;
