
import axios from 'axios'
import Image from 'next/image'
import headerImage from '../public/assets/images/header-image.jpg'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function ActivationLayout() {
    const router = useRouter()
    if (!router.isReady) {
        return null
    }
    const {id} = router.query

    const requestActivate = async (id) => {
        await axios
        .post(`http://13.229.240.1:8080/users/activation/${id}`)
        .then((res) => {
            console.log(res);
            Swal.fire(
                'Account has been activated!',
                'Redirect to login page..',
                'success'
            ).then(function(){
                setTimeout(5000)
                router.push('/login')
            })
        })
        .catch((error) => {
            console.log(error);
            Swal.fire(
                'error',
                'error',
                // ""+pesanHead+"",
                // ""+pesanIsi+"",
                'error'
            )
        });
    }

    const onActivate = async () => {
        await requestActivate(id)
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
                        <div> 
                            <h2 className="mt-3 text-2xl font-bold text-neutral-600 text-center md:text-left lg:text-left">Activation Account</h2>
                        </div>
                        <div className="mt-3">
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
                                hover:bg-red-300"
                                onClick={onActivate}
                                > Click to Activate </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
