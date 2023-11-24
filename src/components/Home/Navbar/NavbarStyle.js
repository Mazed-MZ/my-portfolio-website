import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: ${({scrollNav}) => (scrollNav ? '60px' : '120px')};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    scroll-behavior: smooth;
    z-index: 10;
    transition: 1s all ease;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
        background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65));
        height: ${({scrollNav}) => (scrollNav ? '60px' : '80px')};
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        color: #01bf71;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        height: ${({scrollNav}) => (scrollNav ? '80px' : '10px')};
    }
`;

export const NavManu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-bottom: ${({scrollNav}) => (scrollNav ? '0' : '20px')};

    @media screen and (max-width: 760px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    padding-top: ${({scrollNav}) => (scrollNav ? '0' : '20px')};

    &:hover{
        color: #01bf71;
        transition: all 0.5s ease-in-out;
    }
    &.active{
        border-bottom: 5px solid #89fa07;
        transition: 0.2s all ease-in-out;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:760px){
        display: none;
    }
`;


export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 7px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;



// export const lightTheme = {
//     body: "#fff",
//     fontColor: "#000",
// };



// export const darkTheme = {
//     body: "#000",
//     fontColor: "#fff",
// };

// export const GlobalStyles = createGlobalStyle`
//       body {
//           background-color: ${(props) => props.theme.body};
//       }
//   `;
{/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                        <GlobalStyles />
                        <StyledApp>
                            <Button variant="outlined" color='primary' onClick={() => themeToggler()}>
                            Day
                                <Switch />
                            Night    
                            </Button> 
                        </StyledApp>
                    </ThemeProvider> */}