import "./search_bar.css";
export default function SearchBar() {
    return (
        <div className="flex flex-1 justify-center items-center">
    <form className="search-box w-4/5 flex items-center justify-between px-8 py-4">
      <div className="w-10/12 flex items-center justify-center">
        <input id="search-bar" type="text" placeholder="Search..." aria-label="Search"
               className="w-full text-3xl px-4 bg-transparent border-none outline-none"/>
      </div>
      <button className="flex justify-center items-center cursor-pointer border-none rounded-full">
        <i className="ri-search-line text-2xl"></i>
      </button>
    </form>
  </div>
    );
}