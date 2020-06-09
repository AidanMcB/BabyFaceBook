import React from 'react'


export default function BabyShow(props) {
    console.log("im the baby",props)
    return(
        <h1>{props.name}</h1>
    )
}