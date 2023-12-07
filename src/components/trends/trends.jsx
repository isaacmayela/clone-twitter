import "./trends.css"
import SearchComponent from "../search-component/seach-component";
import TrendsDescription from "../trends-description/trends-description";
import Chanels from "../chanels/chanels";


function Trends() {
    return (
      <>
        <div className="trends">
          <SearchComponent />
          <TrendsDescription />
          <Chanels />
          <p className="last-description">Terms of services Privacy Policy Cookie Policy Inprint Add info More @2021 Twitter, Inc</p>
        </div>
      </>
    );
  }
  
  export default Trends;