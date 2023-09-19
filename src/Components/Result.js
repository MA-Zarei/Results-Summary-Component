import React from "react";
import '../Assests/Styles/result.css'

const Result = (props) =>{
    return(
        <div className="resultDiv">
            <h2>Your Result</h2>
            <div className="circle">
                <p className="firstl">{props.score}</p>
                <p className="secl">of 100</p>
            </div>
            <p className="status">Great</p>
            <p className="desc">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}

export default Result;