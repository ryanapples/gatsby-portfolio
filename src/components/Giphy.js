import React from "react"
import GIF from "../images/giphy.gif"

import styled from "styled-components"

const GiphyContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  position: relative;
  display: ${props => (!props.isToggled ? `none` : `block`)};
`

export default props => (
  <GiphyContainer isToggled={props.isToggled} className="giphy-container">
    <img src={GIF} alt="" />
  </GiphyContainer>
)
