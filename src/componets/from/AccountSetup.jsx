'use client'
import InputCom from "@/componets/InputCom";
import React from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

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
        <div className={"flex flex-col gap-4"}>
            <h1 className={"text-3xl font-bold"}>Account Setup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputCom label={"User Name"} name="userName" register={register} error={errors.userName} />
                <InputCom label={"Password"} name="password" register={register} error={errors.password} type={"password"} />
                <InputCom label={"Confirm Password"} name="confirmPassword" register={register} error={errors.confirmPassword} type={"password"} />
                <div className="flex justify-between items-center">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded" type="submit">Create Account</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" type="button" onClick={onPrev}>Previous</button>
                </div>
            </form>
        </div>
    );
}
