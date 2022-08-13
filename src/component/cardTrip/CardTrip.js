import React from 'react'
import * as C from "./styled"

const CardTrip = (props) => {
    return (
        <C.ContainerCard>
             <C.Opacidade></C.Opacidade>
            <p>{props.trip.planet}</p>
            <p>{props.trip.name}</p>
            <C.Info>
                <p>{props.trip.description}</p>
                <p>{props.trip.durationInDays}</p>
                <p>{props.trip.date}</p>
            </C.Info>
           
        </C.ContainerCard>
    )
}

export default CardTrip