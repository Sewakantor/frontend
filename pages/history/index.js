import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TableHistory from '../../components/TableHistory';
import Head from 'next/head';


export default function index({}) {
    const userData = useSelector((state) => state.user);
    const router = useRouter();
    const [dataComplex, setDataComplex] = useState();
    const [error,setError] = useState(false)

    useEffect( () => {
        // Fetching data
        axios.get(`http://13.229.240.1:8080/reservation/${userData.id}`, {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${userData.token}`,
          }
        })
        .then((data) => {
            console.log(data);
            setDataComplex(data)
        })
        .catch((err) => {
            setError(true)
        })
        if (!userData.isLogin) {
          router.push('/login');
      }
    }, [userData.isLogin])

    return (
        <div>
            <Head>
                <title>History</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
                      {!error ? (
                        <div>
                          {dataComplex?.data?.data?.map((data) => (
                            <TableHistory 
                              data={data}
                            />
                          ))}
                        </div>
                      ) : (
                        <h1 className='text-center'>No history found, please create a new one.</h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer/>
        </div>
    )
  }
