import "./search-component.css"

function SearchComponent() {
    return (
      <>
        <div className="search-bar">
            <img src="src/images/Search.png" alt="search icon" />
            <input type="search" placeholder="Search Twitter" name="search-bar" id="" />
        </div>
      </>
    );
  }
  
  export default SearchComponent;