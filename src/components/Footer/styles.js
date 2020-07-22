import styled from 'styled-components'

export const Root = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary + '30'};
  color: ${(props) => props.theme.colors.primary};
  padding: 4px 16px;
  grid-area: footer;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 11px;
  }

  small {
    display: block;
    text-align: center;
    font-size: 0.8em;

    a {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const Credits = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 600px;
  margin: 8px auto;

  small {
    display: block;
    font-size: 1em;
    font-weight: 400;
    margin: 4px;
    line-height: 1;

    a {
      font-weight: 500;
      display: inline-block;
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};

      &::after {
        content: '';
        display: block;
        width: 16px;
        margin-left: -4px;
        height: 2px;
        background-color: orangered;
        transition: 200ms;

        @media only screen and (max-width: 425px) {
          height: 1px;
        }
      }

      &:hover::after {
        margin-left: 0;
        background-color: ${(props) => props.theme.colors.primary};
        width: 100%;
      }

      &:active {
        color: darkred;
      }

      &:active::after {
        background-color: darkred;
      }
    }
  }
`
