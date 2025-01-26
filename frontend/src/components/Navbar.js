import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

 

  return (
    <nav className="bg-blue-900 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">BlogApplication</div>
        <div className="md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            <Link to="/adminpannle" className="text-white hover:text-gray-200">Admin Panel</Link>
        </div>
      </div>
    </nav>
  );
}

