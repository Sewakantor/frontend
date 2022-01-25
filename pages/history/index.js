import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toRupiah from '@develoka/angka-rupiah-js';


export default function index({}) {
    const JWT = useSelector((state) => state.user.token);
    const isLogin = useSelector((state) => state.user.isLogin);
    const id = useSelector((state) => state.user.id);
    if (!isLogin) {
        const router = useRouter();
        router.push('/login');
    }

    // const router = useRouter();
    const [dataComplex, setDataComplex] = useState();
    const [isLoading, setLoading] = useState(false);

    // Fetching data
    useEffect(async () => {
        setLoading(true)
        await fetch(`http://13.229.240.1:8080/reservation/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${JWT}`,
            }})
          .then((res) => res.json())
          .then((data) => {
            setDataComplex(data.data)
            setLoading(false)
          })
    }, [])


    const convertDate = (data) => {
        let date = new Date(data);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (dt+'/' + month + '/'+year)
    }

    return (
        <div>
            <Navbar/>
            <section className="py-8 bg-blueGray-50">
  <div className="container px-4 mx-auto">
    <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
      <div className="flex flex-wrap mb-8 justify-between items-center">
        <div className="w-full md:w-auto mb-10 md:mb-0">
          <h3 className="text-3xl font-heading font-medium leading-10">
            History
          </h3>
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
                  Start Date
                </th>
                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                  End Date
                </th>
                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                  Status
                </th>
                <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {dataComplex !== undefined? dataComplex?.map((data)=> (
                  <tr>
                  <td className="p-0">
                    <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <h4 className="font-heading font-medium leading-4">
                            {data.unit.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                      <span className="font-heading text-darkBlueGray-400">
                      {convertDate(data.check_in_date)}
                      </span>
                    </div>
                  </td>
                  <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                      <span className="font-heading text-darkBlueGray-400">
                      {convertDate(data.check_out_date)}
                      </span>
                    </div>
                  </td>
                  <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                      <span className="py-1 px-3 text-sm text-green-900 font-medium bg-red-200 rounded-full">
                      {data.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                      {toRupiah(data.price, {symbol: 'IDR', floatingPoint: 0})}
                    </div>
                  </td>
                </tr>
              )) : "" }
              
            </tbody>
          </table>
          {isLoading??<div class="mt-8 mx-auto text-center max-w-max">Loading</div>}
        </div>
      </div>
    </div>
  </div>
</section>
            <Footer/>
        </div>
    )
}

