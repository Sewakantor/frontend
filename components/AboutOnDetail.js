import { data } from "autoprefixer";

export default function AboutOnDetail({data}) {

    return (
        <div className="">
            <div className="">
                <div className="">
                    <h1 className="mb-5 font-bold text-2xl">Tentang {data.Name} </h1>
                    <p className="whitespace-pre-line text-lg">
                        {data.Desc}
                    </p>
                </div>
                <div className="mt-8">
                    <h1 className="mb-5 font-bold text-2xl">Fasilitas Gedung</h1>
                    <div className="grid grid-cols-3 gap-y-4 text-lg">
                        <p>ATM</p>
                        <p>Bank</p>
                        <p>Foodcourt</p>
                        <p>Mini Market</p>
                        <p>Restaurant</p>
                    </div>
                </div>
                </div>

        </div>
    )
}
