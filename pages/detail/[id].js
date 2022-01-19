import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import HeaderOnDetail from '../../components/HeaderOnDetail'
import AddReview from '../../components/AddReview'
import ButtonGray from '../../components/ButtonGray'
import CardReview from '../../components/CardReview'
import AboutAndForm from '../../components/AboutAndForm'
import ListCardOffice from '../../components/ListCardOffice'
import Footer from '../../components/Footer'

export default function index() {
    const router = useRouter();
    const {id} = router.query
    return (
        <div>
            <Navbar/>
            <div className="pt-10 container mx-auto px-4 sm:px-2 mb-10">
                <HeaderOnDetail/>
                <AboutAndForm/>
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
