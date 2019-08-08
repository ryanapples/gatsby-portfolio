import React from "react"

import styled from "styled-components"

const GiphyContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  position: relative;
  display: ${props => (!props.isToggled ? `none` : `block`)};
`

const GiphyText = styled.p`
  position: absolute;
  bottom: -60px;

  a {
    font-size: 18px;
    line-height: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }
`

export default props => (
  <GiphyContainer isToggled={props.isToggled} className="giphy-container">
    <iframe
      src="https://giphy.com/embed/l0MYND1FEaEE49D5S"
      title="ryan gosling - young hercules"
      frameBorder="0"
      className="giphy-embed"
    ></iframe>
    <GiphyText>
      <a
        href="https://giphy.com/gifs/hulu-tv-land-young-hercules-universal-television-l0MYND1FEaEE49D5S"
        target="_blank"
        rel="noopener noreferrer"
      >
        via GIPHY
      </a>
    </GiphyText>
  </GiphyContainer>
)
