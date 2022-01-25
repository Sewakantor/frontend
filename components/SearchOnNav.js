import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function SearchOnNav() {
    const router = useRouter();
    const [dataComplex, setDataComplex] = useState();
    const [isLoading, setLoading] = useState(false)

    // Fetching data
    useEffect(async () => {
        setLoading(true)
        await fetch('http://13.229.240.1:8080/property/complex')
          .then((res) => res.json())
          .then((data) => {
            setDataComplex(data.data)
            setLoading(false)
          })
    }, [])
    
    // Loading Search Bar
    if (isLoading) return <h1>Loading search bar..</h1>

    // Handle Search Bar
    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }   
    const handleOnHover = (res) => {
        console.log(res)
    }
    const handleOnSelect = (item) => {
        router.push('/search?complex_name=' + item.Name)
    }
    const handleOnFocus = () => {
        console.log('Focused')  
    }
    const handleOnClear = () => {
        console.log("Cleared");
    }

    return (
        <div className='w-full'>
            <ReactSearchAutocomplete
                items={dataComplex}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                fuseOptions={{ keys: ["Name"] }} 
                resultStringKeyName="Name"
                styling={{ zIndex: 10 }} 
            />
        </div>
    )
}