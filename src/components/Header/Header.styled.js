import styled from 'styled-components';

const HeaderContainer = styled.header`
  font-family: 'BebasNeue-Regular';
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.SECONDARY_COLOR} 50%,
    ${(props) => props.theme.colors.PRIMARY_COLOR} 50%
  );

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    color: ${(props) => props.theme.colors.WHITE};

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

    .site-logo {
      padding: 25px 0;
      background-color: ${(props) => props.theme.colors.SECONDARY_COLOR};

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      h1 {
        width: 10%;
        @media screen and (max-width: 768px) {
          width: 58%;
        }

        span {
          display: inline-block ;
          margin-top: 10px;
          font-weight: 700;
        }

        figure {
         svg {
          path {
            fill: white ;
          }
         }
          a {
            display: block;

            img {
              width: 100%;
            }
          }
        }
      }
    }

    .navigation-menu {
      width: 35%;
    }
  }
`;

const NavigationContainer = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    li {
      margin:0 5%;

      a {
        display:inline-block ;
        padding:15px;
      }
    }
  }  
`;

export { HeaderContainer, NavigationContainer };
