'use client'

import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

export interface TextProps extends TypographyProps {}

const StyledText = styled.p<TextProps>`
  font-family: var(--open-sans);
  font-size: 1rem;
  margin: 0;
  padding: 0;

  ${typography};
`

export default StyledText
