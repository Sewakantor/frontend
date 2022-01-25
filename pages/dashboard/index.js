import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FormLogin from '../../components/FormLogin'
import { useJwt } from "react-jwt";
import Sidebar from '../../components/Sidebar';

export default function index() {
    const JWT = useSelector((state) => state.user.token);
    const isLogin = useSelector((state) => state.user.isLogin);
    const role = useSelector((state) => state.user.role);
    if (!isLogin || role !== "admin") {
        const router = useRouter();
        router.push('/login');
    }

    const [dataComplex, setDataComplex] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true)
        await fetch('http://13.229.240.1:8080/property/complex', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${JWT}`,
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setDataComplex(data.data)
                setLoading(false)
            })
    }, [])
    console.log(dataComplex)
    return (
        <div>
            <Sidebar>
                <section className="py-8 bg-blueGray-50">
                    <div className="container px-4 mx-auto">
                        <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
                            <div className="flex flex-wrap mb-8 justify-between items-center">
                                <div className="w-full md:w-auto mb-10 md:mb-0">
                                    <h3 className="text-3xl font-heading font-medium leading-10">
                                        Complex
                                    </h3>
                                </div>
                                <div className="w-full md:w-auto">
                                    <div className="inline-block w-full md:w-auto p-1 border border-blue-500 rounded-xl">
                                        <a
                                            className="inline-block py-3 px-8 w-full md:w-auto leading-5 text-darkBlueGray-400 font-semibold tracking-tighter font-heading text-center bg-purple-50 hover:text-darkBlueGray-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                            href="#"
                                        >
                                            Add New
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="inline-block w-full min-w-max overflow-hidden">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Product name
                                                </th>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Ordered
                                                </th>
                                                <th className="pb-8 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                                                    Remaining
                                                </th>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataComplex !== undefined ? dataComplex?.map((data) => (
                                                <tr>
                                                    <td className="p-0">
                                                        <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0">
                                                                    <h4 className="font-heading font-medium leading-4">
                                                                        {data.Name}
                                                                    </h4>
                                                                    <span className="text-sm text-darkBlueGray-400 leading-3">
                                                                        {data.Street.substring(0, 30)}....
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            <span className="font-heading text-darkBlueGray-400">
                                                            {data.City} - {data.PostalCode}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            <span className="font-heading text-darkBlueGray-400">
                                                                {data.City}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            {data.Country}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )) : ""}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Sidebar>
        </div>
    )
}
