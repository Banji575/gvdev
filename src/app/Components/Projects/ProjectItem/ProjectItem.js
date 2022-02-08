import React from "react";
import { ProjectIcon } from "../ProjectIcon/ProjectIcon";
// import { ImageWrapper } from "../../ImageWrapper/ImageWrapper.tsx";
import pcIcon from './../../../img/playcavas.jpg'
import './ProjectItem.scss'

export const ProjectItem = ({src}) => {
    return(
        <div className="ProjectItem-container">
            <div className="ProjectItem">
                <div className="ProjectItem-img">
                    <img src={src} alt="" srcset="" />
                </div>
            </div>
            <div className="ProjectItem-descript" >
                <div className="ProjectItem-iconContainer">
                    <ProjectIcon icons={[pcIcon]}/>
                    <ProjectIcon icons={[pcIcon]}/>
                </div>
            </div>
        </div>
 
    )
}