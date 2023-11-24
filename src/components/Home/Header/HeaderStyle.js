import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeaderContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25));
    }
`;

export const HeaderBanner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const HeaderContent = styled.div`
    display: flex;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
`;


export const HeaderTitle = styled.h1`
    color: #fff;
    font-size: 70px;
    text-align: center;
    animation: text 10s 1;

    @media screen and (max-width: 760px){
        font-size: 52px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

    @keyframes text {
        0%{
            color: #000;
            font-size: 24px;
            margin-bottom: -70px;
        }
        15%{
            color: #1fc2a4;
            margin-bottom: -70px;
        }
        25%{
            color: #fcf003;
            font-size: 100px;
            margin-bottom: -70px;
        }
        35%{
            color: #48660c;
        }
        45%{
            color: #cc0e93;
        }
        55{
            color: #c21f1f;
        }
        65%{
            color: #f50a1d;
        }
        75%{
            color: #bcc21f;
        }
        85%{
            color: #0c4466;
        }
        95%{
            color: #01bf71;
        }

    }
`;


export const HeaderInfo = styled.p`
    color: #01bf71;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    &:first-child{
        animation: anim 60s infinite;
    }

    @keyframes anim{
        0%{
            margin-top: 0;
        }
        10%{
            margin-top: -40px;
        }
        20%{
            margin-top: -100px;
        }
        30%{
            margin-top: -140px;
        }
        40%{
            margin-top: -200px;
        }
        50%{
            margin-top: -250px;
        }
        60%{
            margin-top: -200px;
        }
        70%{
            margin-top: -140px;
        }
        80%{
            margin-top: -100px;
        }
        90%{
            margin-top: -40px;
        }
        100%{
            margin-top: 0;
        }
    }

    @media screen and (max-width: 760px){
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`;

export const HeaderTags = styled.div`
    border: 2px solid darkgreen;
    border-radius: 20px;
    padding: 0 40px;
    height: 60px;
    margin-top: 50px;
    overflow: hidden;
    background: #000;
    animation: subtitle 3s 1;

    
    @keyframes subtitle{
        0%{
            color: #000;
            margin-top: 70px;
        }

        40%{
            max-width: 1200px;
        }

        80%{
            color: #01bf71;
            margin-top: 40px;
        }
    }
`

export const HeaderBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;


export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`