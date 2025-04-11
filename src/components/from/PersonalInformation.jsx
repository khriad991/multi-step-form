'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import MainLayout from "../MainLayout";
import InputCom from "./InputCom";


const schema = z.object({
    fullName: z.string().min(1, 'Full Name is required'),
    email: z
        .string()
        .nonempty("Email is required")
        .email('Invalid email')
        .refine((email) => /@(gmail\.com|yahoo\.com|outlook\.com)$/.test(email),
            {message:"Email must end with @gmail.com, @yahoo.com or @outlook.com"}
            ),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

export default function PersonalInformation({ onNext, defaultValues }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues,
    });


    const onSubmit = (data) => {
        onNext(data);
    }

    return (
        <MainLayout title={"Personal Information"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputCom label="Full Name" name="fullName" register={register} error={errors.fullName}/>
                <InputCom label="Email" name="email" register={register} error={errors.email} />
                <InputCom label="Phone Number" name="phone" register={register} error={errors.phone} type={"number"}/>
                <button className="w-fit my-transition px-8 py-2 text-black rounded-lg font-bold capitalize  bg-black text-white hover:bg-white hover:text-blue-700 border hover:border-black  dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-gray-300 dark:bg-gray-200 mx-auto"
                    type="submit">Next</button>
            </form>
        </MainLayout>
    );
}
