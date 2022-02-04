import React from "react";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import './Projects.scss'
export const Projects = () =>{
    return(
        <div className="Projects-container">
            <p className="fs-24 font-regular">PROJECTS</p>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    )
}