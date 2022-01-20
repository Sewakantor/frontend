import Rating from 'react-rating'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { StarIcon as StarSolid } from '@heroicons/react/solid'
import ButtonGray from './ButtonGray';

export default function AddReview() {
    const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire(
            'Register account success!',
            'Silahkan cek email untuk verifikasi',
            'success'
        )
        reset({
            rating:0,
            comment:""
        })
    }
    return (
        <div className='pt-5'>
            <h1 className="text-2xl font-bold mb-2">Review Kantor</h1>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Rating
                        emptySymbol={<StarSolid className="w-6 h-6 text-[#C4C4C4]" />}
                        fullSymbol={<StarSolid className="w-6 h-6 text-yellow-500" />}
                        {...register("rating",{required:"Rating tidak boleh kosong"})}
                        onChange={(val) => setValue("rating", val)}
                        initialRating={setValue("rating"),0}
                        className='mb-1'
                    />
                    {errors.rating && errors.rating.type === "required" &&  <p className="mb-3 text-red-600 text-xs font-medium">{errors.rating.message}</p>}
                    <div>
                        <textarea
                            placeholder='Add comment here..'
                            className={"w-full h-48 border rounded-md text-md p-3 focus:outline-none " + 
                            (errors.comment ? 'border-red-600' : 'border-gray-400')}
                            {...register("comment",{required:"Comment tidak boleh kosong"})}
                            onChange={setValue("comment"),getValues("comment")}
                        />
                        {errors.comment && errors.comment.type === "required" && <p className="mt-1 text-red-600 text-xs font-medium">{errors.comment.message}</p>}
                    </div>
                    <div className="float-right align-text-bottom"> 
                        <ButtonGray>Submit</ButtonGray>
                    </div>
                </form>
            </div>
        </div>
        
    )
}
