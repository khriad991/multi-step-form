'use client'
import React from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import MainLayout from "../MainLayout";
import InputCom from "./InputCom";

// Update Schema
const Schema = z.object({
    userName: z
        .string()
        .nonempty("User Name is required")
        .min(4, "User Name must be at least 4 characters"),
    password: z
        .string()
        .nonempty("Password is required")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
        .string()
        .nonempty("Confirm Password is required")
        .min(6, "Confirm Password must be at least 6 characters")

}).superRefine((data,ctx)=>{
    console.log("data", data)
    console.log("ctx", ctx)
    if(data.password !== data.confirmPassword){
        ctx.addIssue({
            path:["confirmPassword", ],
            message:"Passwords and Confirm Password do not match",
            code:z.ZodIssueCode.custom,

        })

    }
});

export default function AccountSetup({onNext, onPrev, defaultValues}) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(Schema),
        defaultValues,
    });

    const onSubmit = (data) => {
        onNext(data);
        console.log({...data});
    };

    return (
        <MainLayout title={"Account Setup"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputCom label={"User Name"} name="userName" register={register} error={errors.userName}/>
                <InputCom label={"Password"} name="password" register={register} error={errors.password}
                          type={"password"}/>
                <InputCom label={"Confirm Password"} name="confirmPassword" register={register}
                          error={errors.confirmPassword} type={"password"}/>
                <div className="flex justify-between items-center">
                    <button type="submit"
                            className="w-fit my-transition px-8 py-2 text-black rounded-lg font-bold capitalize  bg-black text-white hover:bg-white hover:text-blue-700 border hover:border-black  dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200"
                    >
                        Check All Details and Submit
                    </button>
                    <button
                        type="button"
                        className="w-fit my-transition px-8 py-2 text-black rounded-lg font-bold capitalize  bg-black text-white hover:bg-white hover:text-blue-700 border hover:border-black  dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200"
                        onClick={onPrev}>Previous
                    </button>
                </div>
            </form>
        </MainLayout>
    );
}
