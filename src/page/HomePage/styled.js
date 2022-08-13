import styled from 'styled-components'

export const Banner = styled.div`
    height: 100vh;
    img{
        width:100%;
        height: 100vh;
        object-fit:cover;
    }
`;

export const AboutUs = styled.section `
    background-color: #1A152C;
    width:100%;
    height:100vh;
    display:flex;
    justify-content: space-around;

`;

export const TextSection = styled.div `
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
        color: #D20320;
        font-size: 48px;
        margin: 0;
    }

    p{
        color: white;
        font-weight: 400;
    }
`;

export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* border:1px solid; */

    img {
        width: 30vw;
        height: 30vw;
    }
`;

export const ContainerViagens = styled.div `
    background-color: #730119;
    height:100vh;
    display: flex;
    flex-direction:column;
    flex-wrap:wrap;

    h3{
        display: flex;
        font-size: 40px;
        color:white;
        align-self:center;
        margin: 30px;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
`;




