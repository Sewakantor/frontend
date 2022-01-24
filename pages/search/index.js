import axios from 'axios';
import React from 'react';

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

export default function index({data}) {
    console.log(data);
    return(
        <>
            Masuk
        </>
    )
}
