import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import HeaderOnDetail from '../../components/HeaderOnDetail'
import AddReview from '../../components/AddReview'
import ButtonGray from '../../components/ButtonGray'
import CardReview from '../../components/CardReview'
import AboutAndForm from '../../components/AboutAndForm'
import ListCardOffice from '../../components/ListCardOffice'
import Footer from '../../components/Footer'
import axios from 'axios'

export const getServerSideProps = async (context) => {
    const id = context.params.id
    try {
        const { data, errors } = await axios.get(`http://13.229.240.1:8080/property/building/${id}`);
        if (errors || !data) {
            return { notFound: true };
        }
        return { props : data };
    } catch (err) {
    return { notFound: true };
    }
};

export default function index({data}) {
    console.log("data di index : ",data);

    return (
        <div>
            <Navbar/>
            <div className="pt-14 container mx-auto px-4 sm:px-2 mb-10">
                <HeaderOnDetail data={data}/>
                <AboutAndForm data={data}/>
                <AddReview/>
                <div className="pt-24">
                    <CardReview/>
                </div>
                <div className="text-center">
                    <ButtonGray>See all</ButtonGray>
                </div>
                <h1 className='font-bold pb-7 pt-20 text-center lg:text-left'>Kantor Lainnya</h1>
                <ListCardOffice/>
            </div>
            <Footer/>
        </div>
    )
}

