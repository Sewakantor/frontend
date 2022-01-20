import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export default function FormSayaBerminat() {
    const {register, handleSubmit, formState: {errors} , reset} = useForm();

    // Regex
    const regexEmail = /^\S+@\S+$/i;
    const regexNoHandphone = /^[0]+\S{10,12}$/;

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire(
            'Form berhasil terkirim!',
            'Kami akan menghubungi anda dalam waktu dekat',
            'success'
        )
        reset();
    }

    return (
        <div className="pb-3">
            <div className="w-80 border rounded-lg border-black p-5">
                <div className="min-w-full">
                    <h1 className="w-6/8 font-bold text-xl leading-relaxed">Kami akan segera menghubungi anda</h1>
                    <form action="#" method="POST" className='text-xs' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-3 space-y-2">
                            <input 
                                type="name" 
                                id="name" 
                                name="name" 
                                className={"border rounded-md min-w-full py-2 px-3 text-black font-medium placeholder:text-gray-400 focus:outline-none " +
                                (errors.name ? 'border-red-600' : 'border-gray-400')}
                                placeholder="Nama Lengkap"
                                {...register("name", {required: "Nama tidak boleh kosong"})}
                            />
                            {errors.name && errors.name.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.name.message}</p>}
                        </div>
                        <div className="mt-3 space-y-2">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className={"border rounded-md min-w-full py-2 px-3 text-black font-medium placeholder:text-gray-400 focus:outline-none " +
                                (errors.email ? 'border-red-600' : 'border-gray-400')}
                                placeholder="Email"
                                {...register("email", {required: "Email tidak boleh kosong",pattern:regexEmail})}
                            />
                            {errors.email && errors.email.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.email.message}</p>}
                            {errors.email && errors.email.type === "pattern" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">Format email tidak valid</p>}
                        </div>
                        <div className="mt-3 space-y-2">
                            <input 
                                type="tel" 
                                id="tel" 
                                name="tel" 
                                className={"border rounded-md min-w-full py-2 px-3 text-black font-medium placeholder:text-gray-400 focus:outline-none " +
                                (errors.name ? 'border-red-600' : 'border-gray-400')}
                                placeholder="No Telepon"
                                {...register("phone", {required: "No Handphone tidak boleh kosong",pattern:regexNoHandphone})}
                            />
                            {errors.phone && errors.phone.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.phone.message}</p>}
                            {errors.phone && errors.phone.type === "pattern" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">Format No Handphone dimulai dengan 0 , 10 hingga 13 digit</p>}
                        </div>
                        <div className="mt-3 space-y-2">
                            <input 
                                type="text" 
                                id="waktu" 
                                name="waktu" 
                                className={"border rounded-md min-w-full py-2 px-3 text-black font-medium placeholder:text-gray-400 focus:outline-none " +
                                (errors.name ? 'border-red-600' : 'border-gray-400')}
                                placeholder="Waktu Kebutuhan"
                                {...register("waktu", {required: "Waktu kebutuan tidak boleh kosong"})}
                            />
                            {errors.waktu && errors.waktu.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.waktu.message}</p>}
                        </div>
                        <div className="mt-3 space-y-2">
                            <textarea 
                                className={"border rounded-md min-w-full pb-10 pl-3 pt-2 inline-block align-text-top placeholder:text-gray-400 font-medium focus:outline-none " +
                                (errors.pesan ? 'border-red-600' : 'border-gray-400') }
                                placeholder="Tinggalkan Pesan"
                                {...register("pesan", {required: "Pesan tidak boleh kosong"})}>
                            </textarea>
                            {errors.pesan && errors.pesan.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.pesan.message}</p>}
                        </div>
                        <button 
                            type="submit" 
                            className="border-lg flex items-center justify-center w-full px-10 py-3 mt-6 font-semibold text-center text-white transition duration-500 ease-in-out transform rounded-xl bg-redLogo hover:bg-red-300 outline-gray-400">
                                Saya Berminat
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
