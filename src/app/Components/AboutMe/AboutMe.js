import React from "react";
import './AboutMe.scss'
import { AboutMeItem } from "./AboutMeItem/AboutMeItem";
export const AboutMe = () =>{
    return(
        <div className="AboutMe-container">
            <AboutMeItem/>    
            <AboutMeItem/>
            <AboutMeItem/>    
        </div>
    )
}