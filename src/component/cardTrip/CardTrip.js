import React from 'react'
import * as C from "./styled"
import Button from '@mui/material/Button';

const CardTrip = (props) => {
    return (
        <C.ContainerCard>
            {/* <C.Opacidade></C.Opacidade> */}
            <C.ContainerPlanet>
                <p>{props.trip.planet}</p>
            </C.ContainerPlanet>


            <C.Titulo>{props.trip.name}</C.Titulo>


            <C.Info>
                <h4>{props.trip.date}</h4>
                <p><strong>Duração: </strong>{props.trip.durationInDays} dias</p>
                <p><strong>Descrição: </strong>{props.trip.description}</p>
                <button> Aplicar</button>
            </C.Info>
        </C.ContainerCard>
    )
}

export default CardTrip