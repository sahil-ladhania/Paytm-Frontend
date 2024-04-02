
const SearchBarComponent = () => {
    return (
        <>
            <div className="flex items-center h-20 px-10">
                <input id="search-user" name="search-user" type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search"/>
            </div>
        </>
    )
}

export default SearchBarComponent
