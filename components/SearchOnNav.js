import { SearchIcon } from '@heroicons/react/outline'

export default function SearchOnNav() {
    return (
        <div className="container flex mx-auto border-2 rounded-full min-w-full max-w-min bg-gray-100">
            <div className="flex rounded">
                <button className="flex items-center justify-center px-4">
                    <SearchIcon className="w-6 h-6 text-gray-600"/>
                </button>
                <input type="text" className="py-2 min-w-full max-w-min text-gray-600 outline-none bg-transparent" placeholder="Lokasi atau nama properti..."/>
            </div>
        </div>
    )
}