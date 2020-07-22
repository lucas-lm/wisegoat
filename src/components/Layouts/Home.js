import styled, { keyframes } from 'styled-components'

const floating = keyframes`
  0% {
    transform: translate(0, 0)
  }

  50% {
transform: translate(-2%, -7%)
  }

  100% {
    transform: translate(0, 0)
  }

`

const HomeLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'hero'
    'footer';
`

export const Hero = styled.main`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: hero;
`

Hero.Left = styled.div`
  width: 40%;
`

Hero.Image = styled.img`
  width: 50%;
  height: auto;
  animation: ${floating} 6s ease-in-out infinite alternate;
`

export const Headline = styled.h1`
  font-size: 8em;
  line-height: 1;
  color: ${(props) => props.theme.colors.primary};

  @media only screen and (max-width: 1024px) {
    font-size: 6em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 5em;
  }

  @media only screen and (max-width: 425px) {
    font-size: 4em;
  }

  @media only screen and (max-width: 375px) {
    font-size: 3em;
  }
`

Headline.Small = styled.span`
  font-size: 0.4em;
  color: ${(props) => props.theme.colors.secondary};
`

export const CTA = styled.a`
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  border-radius: 16px;
  font-size: 2em;
  font-weight: 500;
  margin-top: 40px;
  box-shadow: ${(props) => props.theme.colors.primary + '59'} 2px 2px 8px 1px;
  transition: 200ms ease;

  &:hover {
    transform: scale(1.03);
    background-color: ${(props) => props.theme.colors.primary + 'f0'};
    box-shadow: ${(props) => props.theme.colors.primary + '70'} 2px 2px 4px 1px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.8em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.2em;
    font-weight: 400;
  }

  @media only screen and (max-width: 375px) {
    font-size: 1em;
  }
`

export default HomeLayout
