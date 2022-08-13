import styled from "styled-components";
import Saturn from '../../assets/saturn.webp';

export const ContainerCard = styled.div`
    display:flex;
    flex-direction:column;
    width: 274px;
    height: 400px;
    margin: 5px 10px 10px;
    background-image: url(${Saturn});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: -70px 0;
`;

export const Opacidade = styled.div`
    position:relative;
    background-color:white;
    height: 400px;
    opacity: 0.6;
`;

export const Info = styled.div`
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    /* width: 274px; */
    height: 450px;

`


