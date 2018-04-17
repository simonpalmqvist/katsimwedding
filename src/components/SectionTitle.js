import styled from 'styled-components'

export default styled.h2`
  font-family: 'Amatic SC', cursive;
  text-align: center;
  font-size: 3rem;
  line-height: 4rem;
  padding: 0;
  margin: 0;
  padding-bottom: 1rem;
  font-weight: 300;
  color: #333;
  text-transform: uppercase;

  @media(max-width: 480px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`