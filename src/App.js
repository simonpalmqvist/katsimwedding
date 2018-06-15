import React, {Component} from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Section from './components/Section'
import LanguageBar from './components/LanguageBar'
import SectionTitle from './components/SectionTitle'
import StaticCalendar from './components/StaticCalendar'
import Text from './components/Text'
import Copy, { LANGUAGE } from './components/Copy'
import Weather from './components/Weather'
import timeLeftTo from './utils/timeLeft'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

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


const Map = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 59.3250632, lng: 18.0802095 }}
  >
    <Marker position={{ lat: 59.3219632, lng: 18.0902095 }} />
  </GoogleMap>
)))

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
            <Copy copy='info:header' language={lang} />
          </SectionTitle>
          <Divider />
          <Container>
            <Column>
              <StaticCalendar 
                title={<Copy copy='calendar:wedding' language={lang} />}
                day={timeLeftTo('2018-07-12')}
                extra={<Copy copy='calendar:daysleft' language={lang} />}
              />
            </Column>
          </Container>
          <Divider />
          <SectionTitle>
            <Copy copy='weather:header' language={lang} />
          </SectionTitle>
          <Weather />
          <Divider />
          <SectionTitle>
            <Copy copy='faq:header' language={lang} />
          </SectionTitle>
          <Text bold><Copy copy='faq:clothing:title' language={lang} /></Text>
          <Text>
            <Copy copy='faq:clothing' language={lang} />
          </Text>
          <Divider />
          <Text bold><Copy copy='faq:weather:title' language={lang} /></Text>
          <Text>
            <Copy copy='faq:weather' language={lang} />
          </Text>
          <Divider />
          <Text bold><Copy copy='faq:food:title' language={lang} /></Text>
          <Text>
            <Copy copy='faq:food' language={lang} />
          </Text>
          <Divider />
          <Text bold><Copy copy='faq:bar:title' language={lang} /></Text>
          <Text>
            <Copy copy='faq:bar' language={lang} />
          </Text>
          <Divider />
          <Text bold><Copy copy='faq:gifts:title' language={lang} /></Text>
          <Text>
            <Copy copy='faq:gifts' language={lang} />
          </Text>
          <Divider />
          <Divider />
          <SectionTitle>
            <Copy copy='contact:header' language={lang} />
          </SectionTitle>
          <Map 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTpIyD6x5bRr3sAY7xyjGBdSYmgHOyK10&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Section>
      </div>
    )
  }
} 
