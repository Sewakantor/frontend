import React from 'react'
import AboutOnDetail from './AboutOnDetail'
import FormSayaBerminat from './FormSayaBerminat'

export default function AboutAndForm( {data} ) {
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-3/4 mb-10">
                <AboutOnDetail data={data}/>
            </div>
            <div className="w-full lg:w-1/4 order-last">
                <FormSayaBerminat/>
            </div>
        </div>
    )
}
