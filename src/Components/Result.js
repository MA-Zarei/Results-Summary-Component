import React from "react";
import '../Assests/Styles/result.css'

const Result = () =>{
    return(
        <div className="resultDiv">
            <h2>Your Result</h2>
            <div className="circle">
                <p className="firstl">76</p>
                <p className="secl">of 100</p>
            </div>
            <p className="status">Great</p>
            <p className="desc">Your scored higher than 65% of the people whi have taken these tests.</p>
        </div>
    )
}

export default Result;