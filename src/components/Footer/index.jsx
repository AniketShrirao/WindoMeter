import React from 'react';

import Wrapper from '../wrapper';

import { CopyrightInfo, FooterContainer } from './Footer.styled';

const Footer = () => {

    return (
        <FooterContainer>
            <Wrapper>
                <CopyrightInfo>
                    <div className="copyright">
                        <p>
                            <span>Copyright ©WindoMeter 2021</span>
                            <a href="#FIXME">Website Privacy Policy</a>
                        </p>
                        <p>
                            WindoMeter is a charity (No.1122155) and a
                            not-for-profit company limited by guarantee (No. 04337865)
                            registered in England and Wales.
                        </p>
                    </div>
                </CopyrightInfo>
            </Wrapper>
        </FooterContainer>
    );
};

export default Footer;
