'use client'
import React, { useEffect, useReducer } from 'react';
import MainLayout from "./MainLayout";

// Reducer for managing state
const initialState = {
    isSubmitted: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_SUBMITTED':
            return { ...state, isSubmitted: true };
        case 'CLEAR_SUBMITTED':
            return { ...state, isSubmitted: false };
        default:
            return state;
    }
}

export default function Summary({ data, goToStep, resetFormData }) {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = () => {
        localStorage.setItem("submittedData", JSON.stringify(data));
        dispatch({ type: 'SET_SUBMITTED' });
        console.log("submitted data", data);
    };

    const clearData = () => {
        localStorage.removeItem("submittedData");
        dispatch({ type: 'CLEAR_SUBMITTED' });
        resetFormData()
        goToStep(1);
    };


    useEffect(() => {
        const storedData = localStorage.getItem("submittedData");
        if (storedData) {
            dispatch({ type: 'SET_SUBMITTED' });
        }
    }, []);

    return (
        <MainLayout>
            <h1 className="font-bold text-2xl text-center mb-4">All User Information</h1>
            <div className="flex flex-col gap-4 mx-auto text-base">
                {/* Personal Information Section */}
                <div className="flex flex-col gap-2 border border-transparent hover:border-violet-500/75 dark:hover:border-gray-400/50 my-transition px-6 py-2">
                    <h2 className="font-bold text-xl">Personal Information</h2>
                    <div className="flex flex-col gap-y-1">
                        <p><strong>Full Name:</strong> {data.fullName}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                        <p><strong>Phone:</strong> {data.phone}</p>
                    </div>
                    <button
                        onClick={() => goToStep(1)}
                        className="w-fit bg-blue-600 hover:bg-white border hover:border-blue-600 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200 hover:bg-transparent hover:text-blue-600 my-transition font-medium rounded-md text-white px-6 py-1 rounded capitalize"
                    >
                        Edit
                    </button>
                </div>

                {/* Address Details Section */}
                <div className="flex flex-col gap-2 border border-transparent hover:border-violet-500/75 dark:hover:border-gray-400/50 my-transition px-6 py-2">
                    <h2 className="font-bold text-xl">Address Details</h2>
                    <div className="flex flex-col gap-y-1">
                        <p><strong>Street Address:</strong> {data.streetAddress}</p>
                        <p><strong>City:</strong> {data.city}</p>
                        <p><strong>Zip Code:</strong> {data.zipCode}</p>
                    </div>
                    <button
                        onClick={() => goToStep(2)}
                        className="w-fit bg-blue-600 hover:bg-white border hover:border-blue-600 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200 hover:bg-transparent hover:text-blue-600 my-transition font-medium rounded-md text-white px-6 py-1 rounded capitalize"
                    >
                        Edit
                    </button>
                </div>

                {/* Account Setup Section */}
                <div className="flex flex-col gap-2 border border-transparent hover:border-violet-500/75 dark:hover:border-gray-400/50 my-transition px-6 py-2">
                    <h2 className="font-bold text-xl">Account Setup</h2>
                    <div className="flex flex-col gap-y-1">
                        <p><strong>Username:</strong> {data.userName}</p>
                        <p><strong>Password:</strong> {data.password}</p>
                    </div>
                    <button
                        onClick={() => goToStep(3)}
                        className="w-fit bg-blue-600 hover:bg-white border hover:border-blue-600 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200 hover:bg-transparent hover:text-blue-600 my-transition font-medium rounded-md text-white px-6 py-1 rounded capitalize"

                    >
                      Edit
                    </button>
                </div>

                {/* Submit or Clear Button */}
                <button
                    className={`w-fit my-transition  px-8 py-2 text-black rounded-lg font-bold capitalize  ${state.isSubmitted ? 'bg-red-500 text-white dark:hover:bg-red-200 dark:hover:text-red-500 hover:bg-red-600' : 'bg-blue-700 text-white hover:bg-white hover:text-blue-700 border hover:border-blue-600 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200 mx-auto'}`}
                    onClick={state.isSubmitted ? clearData : handleSubmit}
                >
                    {state.isSubmitted ? "Clear Data" : "Submit Data"}
                </button>
            </div>
        </MainLayout>
    );
}
