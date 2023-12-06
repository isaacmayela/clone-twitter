import "./trends.css"
import SearchComponent from "../search-component/seach-component";
import TrendsDescription from "../trends-description/trends-description";

function Trends() {
    return (
      <>
        <div className="trends">
           <SearchComponent />
           <TrendsDescription />
        </div>
      </>
    );
  }
  
  export default Trends;