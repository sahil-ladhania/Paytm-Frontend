
const NavbarComponent = () => {
    return (
        <>
            <nav className="flex justify-between items-center h-16 px-10 border-b-2">
                <div className="text-xl font-bold p-2 cursor-pointer">
                    Pay<span className="text-sky-500">tm</span> Wallet App
                </div>
                <div className="flex w-44 justify-between items-center">
                    <span className="text-md font-medium p-2">Hello, User</span>
                    <button className="font-bold p-2">Logout</button>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent
