import Image from 'next/image'
import headerImage from '../public/assets/images/header-image.jpg'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function FormRegister() {
    const {register, handleSubmit, formState: {errors}, reset ,setValue} = useForm();
    const router = useRouter();
    const loginStatus = useSelector((state) => state.user.isLogin);

    // Regex on Validation
    const regexEmail = /^\S+@\S+$/i;
    const regexPassword = /(?=(.*[!@#$%^&*()\-__+.]){1,}).(?=(.*[0-9]){1,}).{8,}$/;
    const regexNoHandphone = /^[8]+\S{9,13}$/;

    setValue("role","customer")
    
    const onSubmit = async (data) => {
        data.phone = parseInt(data.phone)
        console.log(data);
        await axios
        .post('http://13.229.240.1:8080/users', data)
        .then((res) => {
            // console.log(res);
            Swal.fire(
                'Login Success!',
                'Redirect to homepage..',
                'success'
            )
            reset();
        })
        .catch((error) => {
            console.log(error.response.data);
            const pesan = error.response.data.errors[0];
            Swal.fire(
                'Something went wrong',
                ""+pesan+"",
                'error'
            )
        });
    }
    
    useEffect(() => {
        if (loginStatus){
            router.push('/')
        }
    }, [loginStatus]);
    
    return (
        <section className="overflow-hidden">
            <div className="flex min-h-screen overflow-hidden">
                <div className="relative flex-1 hidden w-0 overflow-hidden md:block">
                    <Image 
                        layout='fill'
                        src={headerImage}
                        className="absolute inset-0 object-cover w-full h-full"    
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 px-4 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-22">
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <Link href="/">
                            <button className="flex flex-row">
                                <ArrowCircleLeftIcon className="h-8 w-8 text-redLogo"/>
                                <p className='pl-1 pt-[2.5px]'>Back</p>
                            </button>
                        </Link>
                        <div>
                            <h2 className="mt-2 text-2xl font-bold text-neutral-600"> Register an account. </h2>
                        </div>
                        <div className="mt-3">
                            <div className="">
                                <form action="#" method="POST" className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-600"> Name </label>
                                        <div className="mt-1">
                                            <input 
                                                id="name" 
                                                name="name" 
                                                type="name" 
                                                autoComplete="name" 
                                                placeholder="Your name"
                                                className={"block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                (errors.name ? 'border border-red-600' : 'border border-transparent')} 
                                                {...register("name", {required: "Nama tidak boleh kosong"})}
                                            />
                                            {errors.name && errors.name.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.name.message}</p>}
                                        </div>
                                      </div>
                                    <div className="space-y-1">
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-600"> Email Address </label>
                                            <input 
                                                id="email" 
                                                name="email" 
                                                type="email" 
                                                autoComplete="email" 
                                                placeholder="Your email" 
                                                className={"block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                (errors.email ? 'border border-red-600' : 'border border-transparent')} 
                                                {...register("email", {required: "Email tidak boleh kosong", pattern: regexEmail})} 
                                            />
                                            {errors.email && errors.email.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.email.message}</p>}
                                            {errors.email && errors.email.type === "pattern" && <p className="mt-1 text-red-600 text-xs font-medium">Format email tidak valid</p>}
                                    </div>
                                    <div className="space-y-1">
                                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-600"> Password </label>
                                        <div className="mt-1">
                                            <input
                                                id="password" 
                                                name="password" 
                                                type="password" 
                                                autoComplete="password" 
                                                placeholder="Password" 
                                                className={"block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                (errors.password ? 'border border-red-600' : 'border border-transparent')} 
                                                {...register("password",{required:"Password tidak boleh kosong", pattern: regexPassword})}                                           
                                            />
                                            {errors.password && errors.password.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.password.message}</p>}
                                            {errors.password && errors.password.type === "pattern" && <p className="mt-1 text-red-600 text-xs font-medium">Format password min 8 digit, angka dan huruf special.</p>}                                        
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                    <label htmlFor="text" className="mb-2 block text-sm font-medium text-neutral-600"> Company </label>
                                        <div className="mt-1">
                                            <input 
                                                id="company" 
                                                name="company" 
                                                type="text" 
                                                autoComplete="company" 
                                                placeholder="Company" 
                                                className={"block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                (errors.company ? 'border border-red-600' : 'border border-transparent')} 
                                                {...register("company",{required:"Asal perusahaan tidak boleh kosong"})}
                                            />
                                            {errors.company && errors.company.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.company.message}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                    <label htmlFor="tel" className="mb-2 block text-sm font-medium text-neutral-600"> No. Handphone </label>
                                        <div className="mt-1 flex">
                                            <input
                                                disabled
                                                className='w-2/12 md:w-2/12 lg:w-2/12 px-3 py-2 border border-transparent rounded-lg bg-[#EDEDED] placeholder:text-black'
                                                placeholder='+62'
                                            />
                                            <input 
                                                id="phone" 
                                                name="phone" 
                                                type="number" 
                                                autoComplete="telphone" 
                                                placeholder="No. Handphone"
                                                style={{}}
                                                className={"ml-2 block w-10/12 px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                (errors.phone ? 'border border-red-600' : 'border border-transparent')} 
                                                {...register("phone",{required: "No. Handphone tidak boleh kosong",pattern:regexNoHandphone})}
                                            />
                                        </div>
                                        {errors.phone && errors.phone.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.phone.message}</p>}
                                        {errors.phone && errors.phone.type === "pattern" && <p className="mt-1 text-red-600 text-xs font-medium">Format No Handphone tidak valid</p>}        
                                    </div>
                                    <div className="my-10 text-sm text-right">
                                        <p className="font-normal"> have an account ? <Link href='/login'><a className="text-redLogo">Sign In</a></Link></p>
                                    </div>
                                    <div>
                                        <button type="submit" className="
                                            flex
                                            items-center
                                            justify-center
                                            w-full
                                            py-3
                                            text-base
                                            font-medium
                                            text-center text-white
                                            transition
                                            duration-500
                                            ease-in-out
                                            transform
                                            rounded-xl
                                            bg-redLogo
                                            hover:bg-red-300
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-offset-2
                                            focus:ring-blue-500
                                        "> Sign in </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
