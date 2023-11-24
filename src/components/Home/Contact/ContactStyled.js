import styled from 'styled-components';


export const ContactContainer = styled.div`
    color: #fff;
    padding-top: 5%;
    padding-bottom: 1%;
    background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://c4.wallpaperflare.com/wallpaper/654/18/527/green-the-world-black-background-world-map-wallpaper-preview.jpg");
    
    @media screen and (max-width: 768px){
        margin-top: 20%;
        padding: 100px 0;
        height: 1000px;
    }
`;


export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 450px;
    width: 100%;
    max-width: 1350px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;


export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;



export const Column1 = styled.div`
    margin-bottom: 15px;
    position: relative;
    bottom: 75px;
    top: 30px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px){
        top: 150px;
    }
`;


export const Column2 = styled.div`
    background: rgba(255,255,255,0.04);
    box-shadow: -1px 4px 28px 0px rgba(0,0,0,0.75);
    position: relative;
    z-index: 1;
    bottom: 80px;
    top: 5px;
    padding: 15px;
    grid-area: col2;
    font-color: white;

    @media screen and (max-width: 768px){
        top: 160px;
    }
`;


export const TextWrapper = styled.div`
    font-size: 25px;
    font-family: 'Operator Mono';
    color: lightgray;
    text-decoration: none;
    transition: 0.5s all ease-in;
    padding: 2%;

    @media screen and (max-width: 768px){
        font-size: 20px;
        display: flex;
        flex-wrap: wrap;
        align-content: left;
    }
`;


export const TopLine = styled.div`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;


export const Headline = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
`;


export const Headwrap = styled.p`
    border-bottom: 2px solid gray;
    margin: 0 15px;
    position: absolute;
    transform: translate(-10%, -160%);
    z-index: 2;
    width: 80%;
    padding: 10px;
    text-align: center;

    @media screen and (max-width: 768px){
        transform: translate(0%, -150%);
    }
    
`;

export const Bottomwrap = styled.div`
    margin: 0 15px;
    position: absolute;
    transform: translate(-10%, 280%);
    background: linear-gradient(180deg, #010606, #010606, #0d3a27);
    border: solid lightgreen 1px;
    border-radius: 30px;
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 768px){
        transform: translate(0%, 500%);
    }

`
export const Address = styled.div`
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Icon = styled.div`
    padding: 2.5%;
    font-size: 20px;
`

export const Location = styled.div`
    display: flex;
    flex-direction: row;
`

export const SocialIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SocialInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 50%;
    padding: 3%;
    margin: 5%;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;