import NavigationBar from "../../Navigation/UserNav/NavigationBar";
import AdminNavigation from "../../Navigation/AdminNav/AdminNavigation";

const AdminHeader = () => {
    return (
        <>
            <header className="w-full relative flex flex-col justify-between default-spacing pt-10">
                <NavigationBar />
                <AdminNavigation />
            </header>
        </>
    )
}

export default AdminHeader;