import { ThemeProvider } from 'styled-components'
import { dark } from '@charcoal-ui/theme'
import { TextBox, LinkBox } from './components/TextBox'
import { Heading, SubHeading, Text, Link, Description } from './components/base/Typography'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Container from './components/base/Container'

const App = () => (
  <ThemeProvider theme={dark}>
    <Layout>
      <Container>
        <TextBox>
          <Heading>Ryu Juheon</Heading>
          <SubHeading>a.k.a SaidBySolo</SubHeading>
          <Text>I am a student developer who solves minor inconveniences with code.</Text>
          <br />
          <SubHeading>Contacts</SubHeading>
          <LinkBox>
            <Link href="mailto://saidbysolo@gmail.com">Mail</Link>
            <Link href="https://github.com/SaidBySolo">Github</Link>
            <Link href="https://discord.com/users/345265069132742657">Discord</Link>
          </LinkBox>
        </TextBox>
      </Container>
      <Footer>
        <Description>Made with Create React App {'&'} styled-components {'&'} pixiv/charcoal</Description>
      </Footer>
    </Layout>
  </ThemeProvider >
)

export default App
