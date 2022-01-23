import Navbar from '../components/Navbar'
import Carousels from '../components/Carousels'
import ListCardOffice from '../components/ListCardOffice'
import Testimoni from '../components/Testimoni'
import Client from '../components/Client'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Carousels/>
      <div className='container mx-auto px-2'>
        <h1 className='mb-5 pt-10 text-left font-bold text-2xl'>Sewa - Ruang Kantor Populer</h1>
        <ListCardOffice/>
        <Client/>
        <Testimoni/>
        <Footer/>
      </div>
    </>
  )
}
