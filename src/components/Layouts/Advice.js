import styled from 'styled-components'

const Advice = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    'logo logo .'
    '. card .';
  align-items: center;
  justify-items: center;
`

export const Card = styled.main`
  width: 800px;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.primary + '20'};
  background-image: url('https://placegoat.com/400/400');
  background-repeat: no-repeat;
  background-position: right;
  grid-area: card;
  display: flex;
  align-items: center;
  border-radius: 8px;
`

Card.Quote = styled.article`
  width: 40%;
  margin-left: 40px;

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
  width: 300px;
  height: auto;
`

export default Advice
