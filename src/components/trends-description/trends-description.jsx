import "./trends-description.css"
import { trendsElements } from "./trends-elements";

function TrendsDescription() {
    return (
      <>
        <div className="trends-container">
           <div className="trends-title">
            <h3>Trends for you</h3>
            <img src="src/images/Settings.png" alt="setting logo" />
           </div>

            <div className="trends-list">
                <ul>
                    {
                        trendsElements.map((element) =>(
                            <li key={element.id}>
                                <div className="trend-title">
                                    <p>{element.trendTitle}</p>
                                    <img src="src/images/More-2.png" alt="" />
                                </div>
                                <h5>{element.trendDescription}</h5>
                                <p>{element.trendNumbers}</p>
                            </li>
                        ))
                    }
                </ul>
                
            </div>

        </div>
      </>
    );
  }
  
  export default TrendsDescription;