// components/InputCom.js
import React from 'react';

const InputCom = ({ label, name, type = 'text', placeholder, register, error }) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="ml-2 block text-sm font-medium text-gray-700 dark:text-white ">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`mt-1 px-4 py-2  border rounded-md w-full focus:outline-hidden ${
                    error ? 'border-red-500' : 'border-gray-300 dark:border-gray-400/50'
                }`}
                {...register(name)}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default InputCom;
