import HeaderComponent from "./HeaderComponent"
import NavbarComponent from "./NavbarComponent"
import SearchBarComponent from "./SearchBarComponent"
import UserComponent from "./UserComponent"

const DashboardPageComponent = () => {
    return (
        <>
            <NavbarComponent/>
            <HeaderComponent/>
            <h1 className="h-10 px-10 flex items-center text-lg font-semibold">Users</h1>
            <SearchBarComponent/>
            <UserComponent/>
            <UserComponent/>
            <UserComponent/>
            <UserComponent/>
            <UserComponent/>
        </>
    )
}

export default DashboardPageComponent
