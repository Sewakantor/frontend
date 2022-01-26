import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image'
import Sidebar from '../../../components/Sidebar';
import toRupiah from '@develoka/angka-rupiah-js';

export default function index() {
    // const JWT = useSelector((state) => state.user.token);
    // const isLogin = useSelector((state) => state.user.isLogin);
    // const role = useSelector((state) => state.user.role);
    const router = useRouter();
    const userData = useSelector((state) => state.user)

    if (!userData.isLogin || role !== "admin") {
        router.push('/login');
    }
    const [dataComplex, setDataComplex] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true)
        await fetch('http://13.229.240.1:8080/property/building', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userData.token}`,
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setDataComplex(data.data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <Sidebar>
                <section className="py-8 bg-blueGray-50">
                    <div className="container px-4 mx-auto">
                        <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
                            <div className="flex flex-wrap mb-8 justify-between items-center">
                                <div className="w-full md:w-auto mb-10 md:mb-0">
                                    <h3 className="text-3xl font-heading font-medium leading-10">
                                        Building
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
                                                    Name
                                                </th>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Floor
                                                </th>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Floor Surface
                                                </th>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Total Surface
                                                </th>
                                                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataComplex !== undefined ? dataComplex?.map((data) => (
                                                <tr>
                                                    <td class="p-0">
                                                        <div class="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                            <div class="flex items-center">
                                                                <div class="flex-shrink-0">
                                                                    <h4 class="font-heading font-medium leading-4">{data.Name}</h4>
                                                                    <span class="text-sm text-darkBlueGray-400 leading-3">{data.Year}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            <span className="font-heading text-darkBlueGray-400">
                                                                {data.Floor}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            <span className="font-heading text-darkBlueGray-400">
                                                                {data.FloorSurface} m²
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            {data.TotalSurface} m²
                                                        </div>
                                                    </td>
                                                    <td className="p-0">
                                                        <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                            {toRupiah(data.Price)} 
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
