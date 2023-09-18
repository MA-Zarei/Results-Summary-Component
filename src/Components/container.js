import React from "react";
import '../Assests/Styles/container.css'
import Result from "./Result";
import Summary from "./Summary";

const Container = () =>{
    return(
        <div className="main">
            <Result />
            <Summary />
        </div>
    )
}

export default Container;