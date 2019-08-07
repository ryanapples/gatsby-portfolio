import React from "react"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  height: 100%;
`

const Heading = styled.h1`
  font-size: 40px;
  color: blue;
`

export default () => (
  <Section>
    <Heading>Coming Soon</Heading>
  </Section>
)
