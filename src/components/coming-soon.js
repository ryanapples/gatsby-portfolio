import React from "react"

import styled from "styled-components"
import Media from "../utility/media"

import AppleSvg from "../components/AppleSvg"

const Section = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
`

const Heading = styled.h1`
  font-family: "PT Sans", sans-serif;
  font-size: 50px;
  line-height: 40px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  ${Media.tablet`
    font-size: 60px;
    line-height: 50px;
  `}
  ${Media.laptop`
    font-size: 80px;
    line-height: 70px;
    margin-top: 40px;
    margin-bottom: 40px;
  `}
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #fff;
  ${Media.laptop`
    font-size: 20px;
    line-height: 18px;
  `}
`

export default () => (
  <Section>
    <AppleSvg />
    <Heading>Coming soon</Heading>
    <Paragraph>
      A portfolio built w/{" "}
      <span role="img" aria-label="emoji">
        💜
      </span>
      + Gatsby
    </Paragraph>
  </Section>
)
