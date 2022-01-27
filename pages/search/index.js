import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../../components/Footer';
import ListCardOffice from '../../components/ListCardOffice';
import Navbar from '../../components/Navbar';

export const getServerSideProps = async (context) => {
    const { complex_name } = context.query;
    try {
        const { data, errors } = await axios.get(`http://13.229.240.1:8080/property/building?complex_name=${complex_name}`);
        if (errors || !data) {
            return { notFound: true };
        }
        return { props : data };
    } catch (err) {
        return { notFound: true };
    }
};

export default function index( {data} ) {
    const router = useRouter()
    const { complex_name } = router.query

    return(
        <>
             <Head>
                <title>Search : {complex_name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className='container mx-auto px-4 z-10'>
                <h1 className='pt-8 text-left font-semibold text-2xl'>Search : <a className='font-bold italic'>{complex_name}</a></h1>
                <ListCardOffice data={data}/>
                <Footer/>
            </div>
        </>
    )
}
