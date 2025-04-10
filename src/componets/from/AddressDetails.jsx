'use client'
import React from 'react';
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputCom from "@/componets/InputCom";


const Schema = z.object({
    streetAddress: z.string().min(1, 'Address is required'),
    city:z.string().min(1, 'City is required'),
    zipCode: z
        .string()
        .nonempty("Zip code is required")
        .regex(/^\d{5,}$/, "Zip Code must be at least 5 digits")
})


 export default function  AddressDetails ({onNext, onPrev, defaultValues}) {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver:zodResolver(Schema),
        defaultValues
    })

     const onSubmit = (data)=> {
        onNext(data);
         console.log({...data})
     };
    return (
        <div className={"flex flex-col gap-4 "}>
            <h1 className={"text-lg font-medium capitalize "}>address details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputCom label="Street Address" name="streetAddress" register={register} error={errors.streetAddress}/>
                <InputCom label="City" name="city" register={register} error={errors.city}/>
                <InputCom label="Zip Code" name="zipCode" type={"number"} register={register} error={errors.zipCode}/>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Next</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit" onClick={onPrev}>Previous</button>
                </div>

            </form>
        </div>
    );
 };

// export default AddressDetails;