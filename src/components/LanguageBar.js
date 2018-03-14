import React, {Component} from 'react'
import styled from 'styled-components'

const LangWrapper = styled.div`
  width: 100%;
  text-align: right;
  padding: 1rem 1rem 0 0;
  box-sizing: border-box;
`

const LangAnchor = styled.a`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1.2rem;
  padding: 0.1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`

export default (props) => (
  <LangWrapper>
    <LangAnchor 
      href='#' 
      onClick={e => 
        e.preventDefault() || 
        props.changeLanguage(props.languageToChangeTo)
      }
    >
      {props.languageToChangeTo}
    </LangAnchor>
  </LangWrapper>
)