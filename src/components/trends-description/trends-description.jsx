import "./trends-description.css"
import { trendsElements } from "./trends-elements";
import settingsIcon from "../../images/Settings.png"
import MoreIcon from "../../images/More-2.png"

function TrendsDescription() {
    return (
      <>
        <div className="trends-container">
           <div className="trends-title">
            <h3>Trends for you</h3>
            <img src={settingsIcon} alt="setting logo" />
           </div>

            <div className="trends-list">
                <ul>
                    {
                        trendsElements.map((element) =>(
                            <li key={element.id}>
                                <div className="trend-title">
                                    <p>{element.trendTitle}</p>
                                    <img src={MoreIcon} alt="" />
                                </div>
                                <h5>{element.trendDescription}</h5>
                                <p>{element.trendNumbers}</p>
                            </li>
                        ))
                    }
                </ul>
                
            </div>

            <a href="#" className="see-more-button">Show more</a>

        </div>
      </>
    );
  }
  
  export default TrendsDescription;