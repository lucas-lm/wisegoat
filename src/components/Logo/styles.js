import styled from 'styled-components'

const ratio = (n) => ({ size }) => (n * size) / 8

export const Text = styled.a`
  text-decoration: none;
  font-size: ${ratio(8)}em;
  font-weight: 700;
  line-height: 1;
  color: ${(props) => props.theme.colors.primary};
  grid-area: logo;

  @media only screen and (max-width: 768px) {
    font-size: ${ratio(6)}em;
  }

  @media only screen and (max-width: 425px) {
    font-size: ${ratio(4)}em;
  }
`

Text.Small = styled.span`
  font-size: 0.4em;
  color: ${(props) => props.theme.colors.secondary};
`

Text.defaultProps = {
  size: 5,
}
