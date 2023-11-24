import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBtnWrap, SideBarManu, SideBarLink, SideBarRoute } from './SideBarStyle';

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarManu>
                    <SideBarLink to='home' onClick={toggle}>
                        Home
                    </SideBarLink>
                    <SideBarLink to='about' onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to='skill' onClick={toggle}>
                        Skill
                    </SideBarLink>
                    <SideBarLink to='service' onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to='portfolio' onClick={toggle}>
                        Portfolio
                    </SideBarLink>
                </SideBarManu>
                <SideBtnWrap>
                    <SideBarRoute to='/contact'>
                        Contact
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;