import React, {Component} from 'react'
import styled from 'styled-components'

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
export default (props) => (
  <SectionWrapper {...props}>
    <SectionBody>
      {props.children}
    </SectionBody>
  </SectionWrapper>
) 