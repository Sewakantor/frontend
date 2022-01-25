import CardOffice from '../components/CardOffice'

export default function ListCardOffice({data}) {
    return (
        <>
            <div className="grid gap-y-5 pt-10 grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 lg:justify-items-start">
                {data.map((item) => (
                    <CardOffice data={item}/>
                ))}
            </div>
        </>
    )
}
