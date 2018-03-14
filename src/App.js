import React, {Component} from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Section from './components/Section'
import LanguageBar from './components/LanguageBar'
import Text from './components/Text'
import Copy, { LANGUAGE } from './components/Copy'
import timeLeftTo from './utils/timeLeft'

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
          <Text>
            <Copy copy='moreInfo' language={lang} />
          </Text>
          <Text>
            Sista anmälningsdag {timeLeftTo('2018-06-01')} dagar
          </Text>
          <Text>
            Dagar kvar till bröllop {timeLeftTo('2018-07-12')} dagar
          </Text>
        </Section>
      </div>
    )
  }
} 
