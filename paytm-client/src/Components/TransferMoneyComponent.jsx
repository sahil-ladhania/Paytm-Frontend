
const TransferMoneyComponent = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-slate-300">
                <div className="p-5 h-80 w-6/12 flex flex-col justify-between bg-white rounded-md">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold">Send Money</h1>
                    </div>
                    <div className="h-52 flex flex-col justify-between">
                        <div className="flex items-center justify-between w-3/12">
                            <img className="h-10 rounded-full" src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="user-image"/>
                            <span className="text-lg font-semibold">
                                User Name
                            </span>
                        </div>
                        <div>
                            <label className="text-sm font-medium">
                                Amount (in Rs)
                            </label>
                            <input id="text" name="enter-amount" type="text" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter amount"/>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransferMoneyComponent
