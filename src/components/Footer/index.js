import React from 'react'
import { Root, Credits } from './styles'

const Footer = (props) => {
  return (
    <Root>
      <Credits>
        <small>
          Code by:{' '}
          <a
            href="https://lucas-lm.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Miranda
          </a>
        </small>
        <small>
          Idea & design by:{' '}
          <a
            href="https://github.com/Lorenalgm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lorena Montes
          </a>
        </small>
      </Credits>
      <small>
        Disclaimer: This project is a front-end challenge available on{' '}
        <a
          href="https://devchallenge.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevChallenge
        </a>
        . Check this and another challenges on{' '}
        <a
          href="https://devchallenge.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          devchallenge.com.br
        </a>
      </small>
    </Root>
  )
}

export default Footer
