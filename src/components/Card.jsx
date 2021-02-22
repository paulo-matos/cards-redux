import './Card.css'
import React from 'react'

function getColor(props) {
    if(props.dark) return "Dark"
    if(props.light) return "Light"
    if(props.color1) return "Color1"
    if(props.color2) return "Color2"
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className='Header'>
                <span className='Title'>{props.title}</span>
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}