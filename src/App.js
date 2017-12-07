import React from 'react'
import styled from 'styled-components'
import simonKathi from './simon-kathi.svg'

const SectionWrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  box-sizing: border-box;
  border-bottom: 2px solid black;

  @media(max-width: 480px) {
    padding: 2rem 1rem;
    border-bottom-width: 1px;
  }

  ${props => props.last && 'border-bottom: none;'}
`

const SectionBody = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: 'Amatic SC', cursive;
  text-align: center;
  font-size: 6rem;
  line-height: 8rem;
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;

  @media(max-width: 480px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
`

const Text = styled.p`
  font-family: 'Amatic SC', cursive;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0 0.5rem;
  margin: 0;

  @media(max-width: 480px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`
const Tagline = Text.extend`
  font-size: 4rem;
  line-height: 4rem;

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

export default () => (
  <div>
    <SectionWrapper>
      <SectionBody>
        <TitleImg src={simonKathi} />
      </SectionBody>
    </SectionWrapper>
    <SectionWrapper>
      <SectionBody>
        <Title>
          Simon & Kathi
        </Title>
        <Tagline>
          Bröllop 2018
        </Tagline>
      </SectionBody>
    </SectionWrapper>
    <SectionWrapper last>
      <SectionBody>
        <Text>
          Mer information kommer snart.
        </Text>
      </SectionBody>
    </SectionWrapper>
  </div>
)
