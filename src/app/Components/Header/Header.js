import React from 'react'
import './Header.scss'
export const Header = () =>{
    return(
        <div className='Header-container'>
            <div className='Header'>
                    <div className='Header-photo'>

                    </div>
                    <div className='Header-title '>
                        <p className='font-title fs-36'>Game developer</p>
                        <p className='font-regular fs-18'>Creating game on WebGL and mobile </p>
                    </div>
            </div>
        </div>
    )
}