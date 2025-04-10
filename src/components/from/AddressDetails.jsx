'use client'
import React from 'react';
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import MainLayout from "../MainLayout";
import InputCom from "./InputCom";


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
     };
    return (
        <MainLayout title={"Address Details"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputCom label="Street Address" name="streetAddress" register={register}
                          error={errors.streetAddress}/>
                <InputCom label="City" name="city" register={register} error={errors.city}/>
                <InputCom label="Zip Code" name="zipCode" type={"number"} register={register}
                          error={errors.zipCode}/>
                <div className="flex md:justify-between flex-col md:flex-row gap-y-6 gap-x-4  ">
                    <button type="submit"
                            className="w-fit my-transition px-8 py-2 text-black rounded-lg font-bold capitalize  bg-black text-white hover:bg-white hover:text-blue-700 border hover:border-black  dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200"
                    >Next
                    </button>
                    <button type="submit"
                            className="w-fit my-transition px-8 py-2 text-black rounded-lg font-bold capitalize  bg-black text-white hover:bg-white hover:text-blue-700 border hover:border-black  dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200"

                            onClick={onPrev}>Previous
                    </button>
                </div>

            </form>
        </MainLayout>
    );
 };

// export default AddressDetails;