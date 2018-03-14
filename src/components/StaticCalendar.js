import React, {Component} from 'react'
import styled from 'styled-components'
import Text from './Text'

const BigNumber = Text.extend`
  font-family: 'Amatic SC', cursive;
  font-weight: 700;
  font-size: 8rem;
  line-height: 8rem;

  @media(max-width: 480px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`

const CalendarTitle = Text.extend`
  background: rgb(240,90,80);
  margin: -0.5rem;
  padding: 0.5rem;
  color: white;
  border-collapse: collapse;
`

const Calendar = styled.div`
  width: 70%;
  border: 2px solid black;
  border-radius: 20px;
  margin: 0 auto;
  padding: 0.5rem;
  overflow: hidden;


`
const Line = styled.div`
  height: 2px;
  background: black;
  display: block;
  box-sizing: border-box;
  margin: 0.5rem -0.5rem;

`

export default ({title, day, extra}) => (
  <Calendar>
    <CalendarTitle>{title}</CalendarTitle>
    <Line/>
    <BigNumber>{day}</BigNumber>
    <Text>{extra}</Text>
  </Calendar>
)