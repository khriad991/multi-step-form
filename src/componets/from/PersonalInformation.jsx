'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputCom from "@/componets/InputCom";


const schema = z.object({
    fullName: z.string().min(1, 'Full Name is required'),
    email: z.string().email('Invalid email'),
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

        console.log({...data});
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputCom label="Full Name" name="fullName" register={register} error={errors.fullName} />
            <InputCom label="Email" name="email" register={register} error={errors.email} />
            <InputCom label="Phone Number" name="phone" register={register} error={errors.phone} />
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Next</button>
        </form>
    );
}
