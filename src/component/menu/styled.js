import styled from 'styled-components'

export const Navi = styled.ul `
    position: absolute;
    right:0;
    display:flex;
    list-style:none;
    align-items: center;
    margin-right:30px;

`;

export const Categoria = styled.li`
    margin-left:40px;
    font-size:15px;
    color:white;
    
    &:hover{
        cursor:pointer;
    }

`

export const Cadastrar = styled.button `
    background-color:transparent;
    color:white;
    margin-left:20px;
    font-size:15px;
    padding:8px;
    border:1px solid;
    border-radius: 30px;

    &:hover{
        cursor:pointer;
    }
    

`