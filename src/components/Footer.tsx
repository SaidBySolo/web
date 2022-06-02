import styled from "styled-components";
import theme from "../styled/theme";
import Box from "./base/Box";

const Footer = styled(Box)`
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    align-self: flex-end;
    grid-area: footer;
    ${theme(o => [o.height.px(64)])}
`

export default Footer