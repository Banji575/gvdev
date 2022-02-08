import React from "react";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import './Projects.scss'
import image1 from './../../img/game2.jpg'
import image2 from './../../img/game3.jpg'
import image3 from './../../img/game4.jpg'


export const Projects = () =>{
    return(
        <div className="Projects-container">
            <p className="fs-24 font-regular">PROJECTS</p>
            <ProjectItem src={image1}/>
            <ProjectItem src={image2}/>
            <ProjectItem src={image3}/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    )
}