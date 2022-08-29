import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-family: 'BebasNeue-Regular';
  border-top: 1px solid ${(props) => props.theme.colors.WHITE};
  background-color: ${(props) => props.theme.colors.BACKGROUND_COLOR};
  padding: 50px 0;
`;

const CopyrightInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto-thin', sans-serif;
  font-weight: 600;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .copyright {
    p {
      margin-top: 20px;
      font-size: 12px;
      padding-right: 8px;

      @media screen and (max-width: 768px) {
        text-align: center;
        line-height: 1.8;
      }

      span {
        @media screen and (max-width: 768px) {
          display: block;
        }

        &::after {
          content: '|';
          margin: 0 18px;

          @media screen and (max-width: 768px) {
            content: none;
          }
        }
      }

      a {
        &:hover {
          color: ${(props) => props.theme.colors.PRIMARY_COLOR};
        }
      }
    }
  }

  .footer-logo {
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 18px;
    }

    figure {
      a {
        @media screen and (max-width: 768px) {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

export { FooterContainer, CopyrightInfo };
