import React, { useEffect, useState } from "react";
import '../assets/Styles/container.css'
import Result from "./Result";
import Summary from "./Summary";
import Data from "../data.json"

const Container = () =>{
    const scores=[]
    Data.map((item)=>scores.push(item.score))
    const avg= Math.round(scores.reduce((accumulator, currentValue)=>accumulator+currentValue, 0)/(scores.length))

    return(
        <div className="main">
            <Result score={avg}/>
            <Summary scores={scores}/>
        </div>
    )
}

export default Container;