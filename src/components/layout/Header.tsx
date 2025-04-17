
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <Link to="/">
        <h1 className="text-4xl font-bold text-indic-purple mb-2">Indic-Translator</h1>
      </Link>
      <p className="text-gray-600">Speech-to-Speech Translation for Indian Languages</p>
    </div>
  );
};

export default Header;
