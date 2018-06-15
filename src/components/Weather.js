import React, {Component} from 'react'
import styled from 'styled-components'
import Text from './Text'

const Iframe = styled.iframe`
  border: none;
  allowfullscreen: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  min-width: 100%;
  *width: 100%;
  height: 100%;
  margin-top: -140px;
  @media(max-width: 565px) {
    margin-top: -260px;
  }
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 450px;
  
  @media(max-width: 565px) {
    height: 550px;
  }

  @media(max-width: 375px) {
    height: 450px;
  }
`

export default () => (
  <Wrapper>
    <Iframe
      frameborder='0'
      scrolling='no'
      src='https://darksky.net/details/59.3226,18.0894/2018-7-12/si12/en'
    />
  </Wrapper>
)