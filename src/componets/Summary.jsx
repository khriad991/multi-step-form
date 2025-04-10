'use client'
import React from 'react';

export default function Summary({ data }) {
    return (
        <div className="summary-container">
            <h1 className="text-3xl font-bold">Summary</h1>
            <div className="summary-info">
                <h2 className="text-lg font-medium">Personal Information</h2>
                <p><strong>Full Name:</strong> {data.fullName}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
            </div>

            <div className="summary-info">
                <h2 className="text-lg font-medium">Address Details</h2>
                <p><strong>Street Address:</strong> {data.streetAddress}</p>
                <p><strong>City:</strong> {data.city}</p>
                <p><strong>Zip Code:</strong> {data.zipCode}</p>
            </div>

            <div className="summary-info">
                <h2 className="text-lg font-medium">Account Setup</h2>
                <p><strong>Username:</strong> {data.userName}</p>
                <p><strong>Password:</strong> {data.password}</p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => alert('Form Submitted!')}>Submit</button>
        </div>
    );
}
