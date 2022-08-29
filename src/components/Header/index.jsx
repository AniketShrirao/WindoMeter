import React, { useEffect } from 'react';
import Wrapper from '../wrapper';
import { HeaderContainer, NavigationContainer } from './Header.styled';
import { ReactComponent as SiteLogo } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <Wrapper>
                <div className="site-logo">
                    <h1>
                        <figure>
                            <a to='/' title="Home"><SiteLogo /></a>
                        </figure>
                        <span>Windometer</span>
                    </h1>
                </div>
                <div className="navigation-menu">
                    <NavigationContainer>
                        <ul>
                            <li>
                                <Link to='/' title="Home" >home</Link>
                            </li>
                            <li>
                                <Link to='/finder' title="finder" >finder</Link>
                            </li>
                        </ul>
                    </NavigationContainer>
                </div>
            </Wrapper>
        </HeaderContainer>
    );
};

export default Header;
