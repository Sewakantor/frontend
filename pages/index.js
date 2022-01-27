import Navbar from '../components/Navbar'
import Carousels from '../components/Carousels'
import ListCardOffice from '../components/ListCardOffice'
import Testimoni from '../components/Testimoni'
import Client from '../components/Client'
import Footer from '../components/Footer'
import Head from 'next/head'

export async function getServerSideProps() {

	const [carouselRes, listRes] = await Promise.all([
		fetch('http://13.229.240.1:8080/property/complex'), 
		fetch('http://13.229.240.1:8080/property/building/recommend?limit=3')
	]);
	const [carousel, list] = await Promise.all([
		carouselRes.json(), 
		listRes.json()
	]);
	return { props: { carousel, list } };
}

export default function Home({carousel, list}) {
  console.log(carousel);
  const carouselData = carousel.data
  const listData = list.data
  console.log(carouselData);
  return (
    <>
      <Head>
          <title>Sewakantor</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <Carousels data={carouselData}/>
      <div className='container mx-auto px-4 lg:px-2'>
        <h1 className='pt-10 text-left font-bold text-2xl'>Sewa - Ruang Kantor Populer</h1>
        <ListCardOffice data={listData}/>
        <Client/>
        <Testimoni/>
        <Footer/>
      </div>
    </>
  )
}
