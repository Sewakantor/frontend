import Image from 'next/image'
import headerImage from '../public/assets/images/header-image.jpg'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios';
import { isExpired, decodeToken } from "react-jwt";
import { loginUser } from '../store/userSlice'
import { useDispatch } from 'react-redux'


export default function FormLogin({router}) {
    
    const {register, handleSubmit, formState: {errors} , reset} = useForm();
    const dispatch = useDispatch();

    const requestLogin = (data) => {
        axios
        .post('http://13.229.240.1:8080/auth', data)
        .then((res) => {
            const realData = res.data.data
            dispatch(
                loginUser({
                    id:realData.id,
                    name:realData.name,
                    role:realData.role,
                    token:realData.token
                })
            )
            Swal.fire(
                'Login Success!',
                'Redirect to homepage..',
                'success'
            ).then(function(){
                reset()
                setTimeout(5000)
                router.push('/')
            })
        })
        .catch((error) => {
            const pesanHead = error.response.data.message;
            const pesanIsi = error.response.data.errors[0]
            Swal.fire(
                ""+pesanHead+"",
                ""+pesanIsi+"",
                'error'
            )
        });
    }

    const onSubmit = (data) => {
        requestLogin(data)
    }
    
    
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
                            <h2 className="mt-3 text-3xl font-bold text-neutral-600"> Sign in. </h2>
                        </div>
                        <div className="mt-5">
                            <div className="">
                                <form action="#" method="POST" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                        <div className="mt-1">
                                            <input 
                                                id="email" 
                                                name="email" 
                                                autoComplete="email" 
                                                placeholder="Your Email"
                                                className={"block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                    (errors.email ? 'border border-red-600' : 'border border-transparent')}
                                                {...register("email", {required: "Email dibutuhkan", pattern: /^\S+@\S+$/i})} 
                                            />
                                            {errors.email && errors.email.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.email.message}</p>}
                                            {errors.email && errors.email.type === "pattern" && <p className="mt-1 text-red-600 text-xs font-medium">Format email tidak valid</p>}
                                        </div>
                                      </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                                        <div className="mt-1">
                                            <input 
                                                id="password" 
                                                name="password" 
                                                type="password" 
                                                autoComplete="current-password" 
                                                placeholder="Your Password" 
                                                className={"block w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform rounded-lg bg-[#EDEDED] outline-none border border-red-600" + 
                                                    (errors.password ? 'border border-red-600' : 'border border-transparent')}
                                                {...register("password", {required: "Password dibutuhkan"})}
                                            />
                                            {errors.password && <p className="mt-1 text-red-600 text-xs font-medium">{errors.password.message}</p>}
                                        </div>
                                    </div>
                                    <div className="text-sm text-right">
                                        <a href="#" className="font-normal text-redLogo"> Forgot your password? </a>
                                    </div>
                                    <div>
                                        <button type="submit" className="
                                        flex
                                        items-center
                                        justify-center
                                        w-full
                                        px-10
                                        py-4
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
                                        focus:ring-blue-500"
                                        > Sign in </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Link href='/register'>
                            <div className="mt-2 text-center font-normal text-sm">
                                <p>Don't have an account? <Link href="/register"><a className="text-redLogo">Sign up</a></Link></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}