import React from 'react'
import './Header.scss'

import image1 from './../../img/photo.png'
export const Header = () =>{
    return(
        <div className='Header-container'>
            <div className='Header'>
                    <div className='Header-photo'>
                         <img src={image1} className = 'photo-img' />
                         
                    </div>
                    <div className='Header-title '>
                        <p className='font-title fs-36'>Game developer</p>
                        <p className='font-regular fs-18 color-1'>Creating games for WebGL and mobile </p>
                    </div>
            </div>
        </div>
    )
}