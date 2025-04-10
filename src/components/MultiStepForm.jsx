'use client'
import React, { useEffect, useState } from 'react';
import Summary from './Summary';
import PersonalInformation from "./from/PersonalInformation";
import AddressDetails from "./from/AddressDetails";
import AccountSetup from "./from/AccountSetup";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const defaultFormData = {
        fullName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        userName: '',
        password: '',
    };




    // Check localStorage on mount
    useEffect(() => {
        const storedData = localStorage.getItem("submittedData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setFormData(parsedData);
            setStep(4); // jump to summary
        }
    }, []);

    const handleNext = (data) => {
        setFormData(prevData => ({ ...prevData, ...data }));
        setStep(prev => prev + 1);
    };

    const handlePrev = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = () => {
        console.log('Final form data submitted:', formData);
        localStorage.setItem("submittedData", JSON.stringify(formData)); // just in case you want to save again
    };

    const resetFormData = () => {
        setFormData(defaultFormData)
    }


    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInformation onNext={handleNext} defaultValues={formData} />;
            case 2:
                return <AddressDetails onNext={handleNext} onPrev={handlePrev} defaultValues={formData} />;
            case 3:
                return <AccountSetup onNext={handleNext} onPrev={handlePrev} defaultValues={formData} />;
            case 4:
                return <Summary data={formData} onSubmit={handleSubmit} goToStep={setStep} resetFormData={resetFormData} />;
            default:
                return null;
        }
    };

    return (
        <div className="form-container">
            {renderStep()}
        </div>
    );
}
