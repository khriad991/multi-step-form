// components/InputCom.js
import React from 'react';

const InputCom = ({ label, name, type = 'text', placeholder, register, error }) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register(name)}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default InputCom;
