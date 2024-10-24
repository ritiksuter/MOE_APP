import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-600 py-6 mt-8">
            <div className="container mx-auto text-center text-white">
                <p>&copy; 2024 Balkonkraftwerk. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#facebook" className="hover:text-gray-300">Facebook</a>
                    <a href="#twitter" className="hover:text-gray-300">Twitter</a>
                    <a href="#instagram" className="hover:text-gray-300">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
