import { css } from "styled-components"

import Theme from "../components/theme"

const size = Theme.size

export default Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})
