import React, {Component} from 'react'
import styled from 'styled-components'
import Section from './Section'
import Text from './Text'
import simonKathi from '../assets/simon-kathi.svg'
import Copy from './Copy'

const Title = styled.h1`
  font-family: 'Amatic SC', cursive;
  text-align: center;
  font-size: 6rem;
  line-height: 8rem;
  padding: 0;
  margin: 0;
  color: #333;
  padding-bottom: 2rem;
  font-weight: 300;
  text-transform: uppercase;

  @media(max-width: 480px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
`
const Tagline = Text.extend`
  font-family: 'Amatic SC', cursive;
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 3rem;
  color: #333;

  @media(max-width: 480px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`

const TitleImg = styled.img`
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 24rem;
  margin-bottom: -3.1rem;

  @media(max-width: 480px) {
    width: 16rem;
    margin-bottom: -2.05rem;
  }
`
export default ({lang}) => (
  <div>
    <Section>
      <TitleImg src={simonKathi} />
    </Section>
    <Section>
      <Title>
        Simon & Kathi
      </Title>
      <Tagline>
        <Copy copy='title' language={lang} />
      </Tagline>
    </Section>
  </div>
)
