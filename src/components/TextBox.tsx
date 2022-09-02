import Flex from './base/Flex'
import styled from 'styled-components'
import theme from '../styled/theme'

export const WrapBox = styled(Flex)`
    flex-direction: column;
    flex-wrap: wrap;
`

export const TextBox = styled(Flex)`
    flex-direction: column;
    ${theme(o => [o.margin.all(24)])}
`

export const LinkBox = styled(Flex)`
    ${theme(o => [o.margin.top(8)])}
`

