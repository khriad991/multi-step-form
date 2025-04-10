/*
'use client';
import React, { useState } from 'react';
import PersonalInformation from "@/componets/from/PersonalInformation";
import AddressDetails from "@/componets/from/AddressDetails";
import AccountSetup from "@/componets/from/AccountSetup";
import Summary from "@/componets/Summary";


export default function FormPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        zip: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const next = () => setStep((prev) => prev + 1);
    const prev = () => setStep((prev) => prev - 1);

    const updateData = (data) => {
        setFormData({ ...formData, ...data });
        next();
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Multi Step Form</h2>
            {step === 1 && <PersonalInformation onNext={updateData} defaultValues={formData} />}
            {step === 2 && <AddressDetails onNext={updateData} onPrev={prev} defaultValues={formData} />}
            {step === 3 && <AccountSetup onNext={updateData} onPrev={prev} defaultValues={formData} />}
            {step === 4 && <Summary data={formData} onPrev={prev} />}
        </div>
    );
}
*/


import MultiStepForm from "@/componets/MultiStepForm";

export default function Home() {
    return <MultiStepForm/>
}