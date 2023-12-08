import "./search-component.css"
import searchIcon from "../../images/Search.png"

function SearchComponent() {
    return (
      <>
        <div className="search-bar">
            <img src={searchIcon} alt="search icon" />
            <input type="search" placeholder="Search Twitter" name="search-bar" id="" />
        </div>
      </>
    );
  }
  
  export default SearchComponent;