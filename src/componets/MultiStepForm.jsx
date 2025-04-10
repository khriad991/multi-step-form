
'use client'
import React, { useState } from 'react';
import Summary from './Summary';
import PersonalInformation from "@/componets/from/PersonalInformation";
import AddressDetails from "@/componets/from/AddressDetails";
import AccountSetup from "@/componets/from/AccountSetup";                        // Final Summary Step

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        // Merge current data with previous data
        setFormData(prevData => ({ ...prevData, ...data }));
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        // Final submission logic (log to console or send to an API)
        console.log('Final form data submitted:', formData);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInformation onNext={handleNext} defaultValues={formData} />;
            case 2:
                return <AddressDetails onNext={handleNext} onPrev={handlePrev} defaultValues={formData} />;
            case 3:
                return <AccountSetup onNext={handleNext} onPrev={handlePrev} defaultValues={formData} />;
            case 4:
                return <Summary data={formData} onSubmit={handleSubmit} />;
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
