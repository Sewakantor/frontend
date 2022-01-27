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
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Head from 'next/head'


export async function getServerSideProps(context) {

	const id = context.params.id

	const [infoRes, reviewRes,recommendRes] = await Promise.all([
		fetch(`http://13.229.240.1:8080/property/building/${id}`), 
		fetch(`http://13.229.240.1:8080/property/building/review/${id}?limit=2&is_approve=true`),
        fetch('http://13.229.240.1:8080/property/building/recommend?limit=3')
	]);
	const [info, review,recommend] = await Promise.all([
		infoRes.json(), 
		reviewRes.json(),
        recommendRes.json()
	]);
	return { props: { info, review,recommend} };
}


export default function index({info,review,recommend}) {

    const router = useRouter()
    const {id} = router.query
	const infoData = info.data
	const reviewData = review.data
    const recommendData = recommend.data
	const reviewStatus = review.status
    const userData = useSelector((state) => state.user);

    const onClickSeeAll = () => router.push('/review/' + id)
    
    return (
        <div>
             <Head>
                <title>{infoData.Name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className="pt-14 container mx-auto px-4 sm:px-2 mb-10">
                <HeaderOnDetail data={infoData}/>
                <AboutAndForm data={infoData}/>
                <h1 className="text-2xl font-bold">Review Kantor</h1>
                {userData.isLogin ? (
                    <AddReview id={id}/>
                ) : (
                    <h1 className="text-center text-lg font-bold pb-10 pt-10">Sorry you have to be login first before add review</h1>
                )}
                <div className="pt-24">
                <h1 className="text-2xl font-bold mb-5">User Review</h1>
                    {reviewStatus ? (   
                        <div>
                            {reviewData?.map((data) => (
                                <CardReview 
                                    review={data}
                                />
                            ))}
                             <div className="text-center" onClick={onClickSeeAll}>
                                 <Link href={`/review/${id}`} passHref>
                                     <div className="hover:cursor-pointer">
                                        <ButtonGray>See all</ButtonGray>
                                     </div>
                                 </Link>
                            </div>
                        </div>
					) : (
						<h1 className="text-center text-lg font-bold pb-10 pt-10">Sorry No Review for this building.</h1>
					)}
                </div>
                <h1 className='font-bold pt-20 text-center lg:text-left'>Kantor Lainnya</h1>
                <ListCardOffice data={recommendData}/>
            </div>
            <Footer/>
        </div>
    )
}

