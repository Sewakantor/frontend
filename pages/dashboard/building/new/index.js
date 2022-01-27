import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import GetComplex from '../../../../components/GetComplex';
import Sidebar from '../../../../components/Sidebar';

export default function index() {
  const {register, handleSubmit, formState: {errors} , reset} = useForm();

  return (
    <div>
            <Head>
                <title>Create Building</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      <Sidebar>
            <section className="py-8 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
                        <div className="flex flex-wrap mb-8 justify-between items-center">
                            <div className="w-full md:w-auto mb-3 md:mb-0">
                                <h3 className="text-3xl font-medium leading-10">
                                    Create Building
                                </h3>
                            </div>
                        </div>
                        <GetComplex/>
                        <div className="overflow-x-auto">
                            <div className=" w-full min-w-max overflow-hidden">
                                <form className='space-y-4' method="POST">
                                    <div class="flex justify-center">
                                      <div class="w-full">
                                        <label for="formFile" class="form-label inline-block mb-2 text-gray-500">Upload Photos</label>
                                        <input className="form-control
                                          block
                                          w-full
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding
                                          border border-solid border-gray-400
                                          rounded
                                          transition
                                          ease-in-out
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
                                      </div>
                                    </div>
                                    <div> 
                                        <input 
                                            placeholder='Name Building'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                            {...register("name", {required: "Nama Building tidak boleh kosong"})}>
                                        </input>
                                        {errors.name && errors.name.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            placeholder='Year'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                            {...register("year", {required: "Tahun tidak boleh kosong"})}>
                                        </input>
                                        {errors.year && errors.year.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.year.message}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            placeholder='Floor'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                            {...register("floor", {required: "Lantai tidak boleh kosong"})}>
                                        </input>
                                        {errors.floor && errors.floor.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.floor.message}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            placeholder='Floor Surface'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                            {...register("floor_surface", {required: "Floor Surface tidak boleh kosong"})}>
                                        </input>
                                        {errors.floor_surface && errors.floor_surface.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.floor_surface.message}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            placeholder='Total Surface'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                            {...register("total_surface", {required: "Total Surface tidak boleh kosong"})}>
                                        </input>
                                        {errors.total_surface && errors.total_surface.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.total_surface.message}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            placeholder='Price'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '
                                            {...register("price", {required: "Harga tidak boleh kosong"})}>
                                        </input>
                                        {errors.price && errors.price.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.price.message}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            placeholder='Deskripsi'
                                            className='border border-gray-400 rounded-md min-w-full py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none '                                     
                                            {...register("desc", {required: "Latitude tidak boleh kosong"})}>
                                        </input>
                                        {errors.desc && errors.desc.type === "required" && <p className="mt-1 ml-2 text-red-600 text-xs font-medium">{errors.desc.message}</p>}
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
