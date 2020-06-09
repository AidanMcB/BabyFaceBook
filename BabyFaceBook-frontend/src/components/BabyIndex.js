import React from 'react'
import { useHistory } from 'react-router'

export default function BabyIndex (props) {
    console.log(props.handleClick)
    const babies = Object.values(props.babies)
    let history = useHistory()

    return(
        <div>
        {babies.map( baby => (
        <div  
        onClick={() => props.handleClick(baby.id) }>
            <h3>{baby.name}</h3>
            <img src={baby.img} />
        </div>
        ) ) }
        </div>
    )
}