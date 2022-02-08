import React from 'react'

export const ProjectIcon = ({icons}) =>{
        return (
            <div className='ProjectIcons'>
                {icons.map(el=>{
                    return <img src={el}/>
                })}
            </div>
        )
}