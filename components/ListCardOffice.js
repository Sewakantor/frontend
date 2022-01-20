import CardOffice from '../components/CardOffice'

export default function ListCardOffice() {
    return (
        <>
            {/* <h1 className='mb-5 text-center lg:text-left'>Sewa - Ruang Kantor Populer</h1> */}
            <div className="grid gap-y-5 grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 lg:justify-items-start">
                <CardOffice/>
                <CardOffice/>
                <CardOffice/>
            </div>
        </>
    )
}
