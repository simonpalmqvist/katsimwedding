import React, {Component} from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Section from './components/Section'
import LanguageBar from './components/LanguageBar'
import SectionTitle from './components/SectionTitle'
import StaticCalendar from './components/StaticCalendar'
import Text from './components/Text'
import Copy, { LANGUAGE } from './components/Copy'
import timeLeftTo from './utils/timeLeft'

const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  flex-wrap: wrap;
`

const Column = styled.div`
  box-sizing: border-box;
  padding: 1rem;

  :first-child:nth-last-child(1) {
    width: 100%;
  }

  :first-child:nth-last-child(2),
  :first-child:nth-last-child(2) ~ div {
    width: 50%;

    @media(max-width: 480px) { width: 100%; }
  }

  :first-child:nth-last-child(3),
  :first-child:nth-last-child(3) ~ div {
    width: 33.3333%;

    @media(max-width: 480px) { width: 100%; }
  }

  :first-child:nth-last-child(4),
  :first-child:nth-last-child(4) ~ div {
    width: 25%;

    @media(max-width: 480px) { width: 50%; }
  }
`

const Divider = styled.div`
  height: 3rem;
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

  changeLanguage (language) {
    window.location.hash = language
    this.setState({ language })
  }

  render () {
    const lang = this.state.language
    const otherLang = lang === LANGUAGE.SV ? LANGUAGE.DE : LANGUAGE.SV

    return (
      <div>
        <LanguageBar changeLanguage={this.changeLanguage.bind(this)} languageToChangeTo={otherLang} />
        <Header lang={lang} />
        <Section last>
          <SectionTitle>
            Information
          </SectionTitle>
          <Text>
            <Copy copy='moreInfo' language={lang} />
          </Text>
          <Divider />
          <Container>
            <Column>
              <StaticCalendar 
                title={<Copy copy='calendar:registration' language={lang} />}
                day={timeLeftTo('2018-06-01')}
                extra={<Copy copy='calendar:daysleft' language={lang} />}
              />
            </Column>
            <Column>
              <StaticCalendar 
                title={<Copy copy='calendar:wedding' language={lang} />}
                day={timeLeftTo('2018-07-12')}
                extra={<Copy copy='calendar:daysleft' language={lang} />}
              />
            </Column>
          </Container>
        </Section>
      </div>
    )
  }
} 
