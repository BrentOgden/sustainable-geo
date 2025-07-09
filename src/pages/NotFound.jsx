// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-8">Sorry, we couldn't find that page.</p>
      <Link to="/" className="text-green-600 hover:underline">
        Go home
      </Link>
    </div>
  );
}
