import styled from "styled-components";
import theme from "../styled/theme";

const Layout = styled.div`
    display: grid;
    min-height: 100vh;
    height: 100%;
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    grid-template-areas:
	"   .     .      .   "
	"   .  container .   "
	"footer footer footer";

    ${theme(o => [o.bg.background1])}
`

export default Layout
