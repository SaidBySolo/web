import styled from 'styled-components'
import theme from '../../styled/theme'
import Flex from './Flex'


const Box = styled(Flex)`
    ${theme(o => [o.bg.surface2])}
    
`

export default Box