import styled from "styled-components";
import Banner from '../../assets/galaxy.jpg'

export const Container = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    overflow: hidden;
    background-image: url(${Banner});
    background-size: cover;
`

export const ContainerInfo = styled.div `
    width: 400px;
    height: 400px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.h1 `
    font-size: 50px;
    color: white;

`;

export const Input = styled.input `
    background-color:transparent;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #2D3047;
    margin:10px;
    padding:10px;
    width:300px;
`;

export const Button = styled.button `
    padding:5px;
    width:218px;
    height:43px;
    font-weight: bold;
    margin-top:10px;
    background-color:white;
    border:none;
    color: #2D3047;
    &:hover{
        cursor:pointer;
        background-color:#2D3047;
        color:white;
    }
    

`
