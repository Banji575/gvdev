import React from "react";
import { ImageWrapper } from "../../ImageWrapper/ImageWrapper.tsx";
import image1 from './../../../img/game1.jpg'
import './ProjectItem.scss'

export const ProjectItem = () => {
    return(
        <div className="ProjectItem">
              <div className="ProjectItem-img">

              </div>
              <div className="ProjectItem-descript">
                    {/* <img src={image1} alt="" srcset="" /> */}
                    <ImageWrapper className="" src={image1}/>
              </div>
        </div>
    )
}