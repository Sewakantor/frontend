import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Sidebar from '../../../../components/Sidebar';


export default function index() {
    const {register, handleSubmit, formState: {errors} , reset} = useForm();
    const userData = useSelector((state) => state.user)

    console.log(userData.token);

    const requestCreateComplex = (data) => {
        data.latitude = parseFloat(data.latitude)
        data.longitude = parseFloat(data.longitude)
        data.postal_code = parseInt(data.postal_code)
        axios
        .post('http://13.229.240.1:8080/property/complex', data, {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userData.token}`,
            }
          })
        .then((res) => {
            Swal.fire(
                'Success creating a new complex',
                "Redirect to dashboard complex..",
                'success'
            )
            reset();
        })
        .catch((err) => {
            // console.log(err.response.data);
            Swal.fire(
                'Something went wrong',
                "Please try again later..",
                'error'
            )
        });
    }

    const onSubmit = (data) => {
        console.log(data);
        requestCreateComplex(data)
    }
    return (
        <div>
            <Sidebar>
                    <section className="py-8 bg-blueGray-50">
                        <div className="container px-4 mx-auto">
                            <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
                                <div className="flex flex-wrap mb-8 justify-between items-center">
                                    <div className="w-full md:w-auto mb-3 md:mb-0">
                                        <h3 className="text-3xl font-medium leading-10">
                                            Create Complex
                                        </h3>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <div className=" w-full min-w-max overflow-hidden">
                                        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)} >
                                            <div>
                                                <input 
                                                    placeholder='Name Complex'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("name", {required: "Nama Complex tidak boleh kosong"})}>
                                                </input>
                                                {errors.name && errors.name.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.name.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='Street'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("street", {required: "Alamat tidak boleh kosong"})}>
                                                </input>
                                                {errors.street && errors.street.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.street.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='City'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("city", {required: "Kota tidak boleh kosong"})}>
                                                </input>
                                                {errors.city && errors.city.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.city.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='State'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("state", {required: "State tidak boleh kosong"})}>
                                                </input>
                                                {errors.state && errors.state.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.state.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='Country'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("country", {required: "Country tidak boleh kosong"})}>
                                                </input>
                                                {errors.country && errors.country.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.country.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='Postal Code'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("postal_code", {required: "Kode pos tidak boleh kosong"})}>
                                                </input>
                                                {errors.postal_code && errors.postal_code.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.postal_code.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='Latitude'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '                                     
                                                    {...register("latitude", {required: "Latitude tidak boleh kosong"})}>
                                                </input>
                                                {errors.latitude && errors.latitude.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.latitude.message}</p>}
                                            </div>
                                            <div>
                                                <input 
                                                    placeholder='Longitude'
                                                    className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                                    {...register("longitude", {required: "Longitude tidak boleh kosong"})}>
                                                </input>
                                                {errors.latitude && errors.latitude.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.latitude.message}</p>}
                                            </div>
                                            <div className='float-right align-text-bottom'>
                                                <button type='submit' className="border mt-5 px-7 py-3 rounded-md text-white bg-redLogo font-bold">
                                                    Add Complex
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Sidebar>
        </div>
    )
}
