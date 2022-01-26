import CardOffice from '../components/CardOffice'

export default function ListCardOffice({data}) {

    return (
        <>
            <div className="grid gap-y-5 pt-10 grid-cols-1 justify-items-center items-start md:grid-cols-2 lg:grid-cols-3 lg:justify-items-start ">
                {data.map((item) => (
                    <div key={item.ID}>
                        <CardOffice data={item}/>
                    </div>
                ))}
            </div>
        </>
    )
}
