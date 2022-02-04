import React from "react";
import './AboutMe-item.scss'
export const AboutMeItem = () =>{
    return(
        <div className="AboutMe-item">
            <div className="AboutMe-title">
                <p className="font-regular-curs fs-18">About me</p> 
            </div>
            <div className="AboutMe-article font-light fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil, fuga et non nulla dignissimos inventore, omnis distinctio, ratione perferendis nobis laborum nostrum ex. Expedita, voluptates nemo. Amet, nulla facere.</div>
        </div>
    )
}