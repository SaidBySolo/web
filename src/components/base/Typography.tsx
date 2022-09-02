import styled from 'styled-components'
import theme from '../../styled/theme'

export const Heading = styled.h1`
  ${theme(o => [o.font.text1, o.typography(32)])}
`

export const SubHeading = styled.h2`
  ${theme(o => [o.font.text1, o.typography(20)])}
`

export const Text = styled.span`
  ${theme(o => [o.font.text2, o.typography(16), o.margin.all(4)])}
`
export const TextLink = styled.a`
  ${theme(o => [o.font.text3, o.typography(16)])}
`

export const Description = styled.span`
  ${theme(o => [o.font.text3, o.typography(12)])}
`

export const DescriptionLink = styled.a`
  ${theme(o => [o.font.text3, o.typography(12)])}
`

export const Link = styled.a`
  ${theme(o => [o.font.link1, o.typography(14), o.margin.vertical(4), o.margin.right(16), o.width.auto])}
`
