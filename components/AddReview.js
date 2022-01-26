import Rating from 'react-rating'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { StarIcon as StarSolid } from '@heroicons/react/solid'
import ButtonGray from './ButtonGray';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AddReview({id}) {
    const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm();
    const userData = useSelector((state) => state.user)

    const requestAddReview = (data) => {
        axios
        .post(`http://13.229.240.1:8080/property/building/${id}/review`, data, {
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${userData.token}`,
            }
          })
        .then((res) => {
            Swal.fire(
                'Your review has been record',
                "Please wait admin for reviewing your review..",
                'success'
            )
            reset({
                star:0,
                comment:""
            });
        })
        .catch((error) => {
            Swal.fire(
                'Something went wrong',
                "Please try again later..",
                'error'
            )
        });
    }
    
    const onSubmit = (data) => {
        requestAddReview(data)
    }
    
    return (
        <div className='pt-2'>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Rating
                        emptySymbol={<StarSolid className="w-6 h-6 text-[#C4C4C4]" />}
                        fullSymbol={<StarSolid className="w-6 h-6 text-yellow-500" />}
                        {...register("star",{required:"Rating tidak boleh kosong"})}
                        onChange={(val) => setValue("star", val)}
                        initialRating={setValue("star"),0}
                        className='mb-1'
                    />
                    {errors.star && errors.star.type === "required" &&  <p className="mb-3 text-red-600 text-xs font-medium">{errors.star.message}</p>}
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
