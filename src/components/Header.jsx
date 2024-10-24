import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    MOE
                </div>
                <ul className="flex space-x-4 text-white">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
