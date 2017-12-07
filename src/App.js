import React, {Component} from 'react'
import styled from 'styled-components'
import simonKathi from './simon-kathi.svg'
import Copy, { LANGUAGE } from './Copy'

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

const LangWrapper = styled.div`
  width: 100%;
  text-align: right;
  padding: 0.5rem 1rem 0 0;
  box-sizing: border-box;
`

const LangAnchor = styled.a`
  font-family: 'Amatic SC', cursive;
  font-size: 1.2rem;
  padding: 0.1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: black;
  text-decoration: none;
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

export default class App extends Component {

  constructor (props) {
    super(props)

    let language = window.location.hash.substring(1,3)

    if (!Object.values(LANGUAGE).includes(language)) {
      language = LANGUAGE.SV
      window.location.hash = language
    }

    this.state = { language }
  }

  changeLanguage (language, event) {
    event.preventDefault()

    window.location.hash = language

    this.setState({ language })
  }

  render () {
    const lang = this.state.language
    const otherLang = lang === LANGUAGE.SV ? LANGUAGE.DE : LANGUAGE.SV

    return (
      <div>
        <LangWrapper>
          <LangAnchor href='#' onClick={(event) => this.changeLanguage(otherLang, event)}>
            {otherLang}
          </LangAnchor>
        </LangWrapper>
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
              <Copy copy='title' language={lang} />
            </Tagline>
          </SectionBody>
        </SectionWrapper>
        <SectionWrapper last>
          <SectionBody>
            <Text>
              <Copy copy='moreInfo' language={lang} />
            </Text>
          </SectionBody>
        </SectionWrapper>
      </div>
    )
  }
} 
