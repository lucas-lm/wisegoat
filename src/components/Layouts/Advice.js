import styled from 'styled-components'

const Advice = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    'logo logo .'
    '. card .';
  grid-row-gap: 16px;
  align-items: center;
  justify-items: center;
`

export const Card = styled.main`
  position: relative;
  width: 95vw;
  max-width: 800px;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.primary + '20'};
  grid-area: card;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  flex-wrap: wrap;
  box-shadow: #00000040 0px 2px 4px 1px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    max-width: 400px;
  }
`

Card.Quote = styled.article`
  width: 35%;
  margin-left: 40px;
  font-size: 14px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    width: 90%;
    margin: 20px auto;
  }

  @media only screen and (max-width: 425px) {
    font-size: 10px;
  }

  q {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2em;
    font-weight: 700;
  }

  small {
    display: block;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.8em;
    font-weight: 400;
    text-align: right;
  }
`

Card.Image = styled.img`
  display: block;
  width: 400px;
  height: auto;
  border-radius: 0 8px 8px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 8px 8px;
  }
`

Card.Button = styled.a`
  position: absolute;
  bottom: 8px;
  left: 8px;
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-weight: 500;
  box-shadow: ${(props) => props.theme.colors.primary + '59'} 0px 2px 8px 1px;
  transition: 200ms ease;

  &:hover {
    transform: scale(1.03);
    background-color: ${(props) => props.theme.colors.primary + 'f0'};
    box-shadow: ${(props) => props.theme.colors.primary + '70'} 0px 2px 4px 1px;
  }

  &:active {
    transform: scale(0.97);
    background-color: ${(props) => props.theme.colors.primary + 'fc'};
    box-shadow: ${(props) => props.theme.colors.primary + '70'} 0px 1px 4px 1px;
  }
`

export default Advice
