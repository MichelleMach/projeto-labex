import styled from "styled-components";
import Saturn from '../../assets/saturn.webp';


export const ContainerCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width: 274px;
    height: 400px;
    margin: 5px 10px 10px;
    background-image: url(${Saturn});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: -70px -5px;
`;

// export const Opacidade = styled.div`
//     position:relative;
//     background-color:white;
//     height: 100%;
//     opacity: 0.6;
// `;

export const ContainerPlanet = styled.div `
    width: 50px;
    color: white;
    border-bottom: 1px solid;
    text-align:center;
    margin: 5px;
    padding-bottom: 3px; 
`;

export const Titulo = styled.h4`
    display: flex;
    justify-content: center;
    font-size: 21px;
    margin-top: 70px; 
    color: white;
`

export const Info = styled.div`
    display:flex;
    flex-direction:column;
    background-color: white;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    width: 274px;
    height: 230px;

    h4{
        display:flex;
        align-self:center;
        margin: 10px 0 20px;
    }

    p{
        margin: 10px 10px 5px;
        height: 50px;
        /* border:1px solid; */
    }

    button{
        display:flex;
        align-items:center;
        align-self: center;
        text-align:center;
        justify-content:center;
        width: 140px;
        height: 32px;
        font-weight: bold;
        background-color: #D20320;
        border-radius: 30px;
        border: none;
        color: white;
        cursor:pointer;
    }
`;



