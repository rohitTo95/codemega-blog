import "./home_header.css";
// import NavigationBar from "../../Navigation/NavigationBar";
import NavigationBar from "../../Navigation/UserNav/NavigationBar";
import SearchBar from "../../FloatingSearchBox/SearchBar";
export default function HomeHeader() {
    return (
        <>
        <header className="home_header w-full h-screen flex flex-col justify-between default-spacing pt-10">
                 <NavigationBar/>
                 <SearchBar/>
        </header>
        </>
    )

}
