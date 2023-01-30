import React from "react"
import { ThemeProvider } from 'styled-components'
import { dark } from '@charcoal-ui/theme'
import { TextBox, LinkBox } from './components/TextBox'
import { Heading, SubHeading, Text, Link, Description, DescriptionLink } from './components/base/Typography'
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
          <SubHeading>Contacts</SubHeading>
          <LinkBox>
            <Link href="mailto:saidbysolo@gmail.com">Mail</Link>
            <Link href="https://github.com/SaidBySolo">Github</Link>
            <Link href="https://discord.com/users/345265069132742657">Discord</Link>
          </LinkBox>
        </TextBox>
      </Container>
      <Footer as="footer">
        <DescriptionLink href="https://github.com/SaidBySolo/web">Website</DescriptionLink>
        <Description>&nbsp;created using&nbsp;</Description>
        <DescriptionLink href="https://vitejs.dev/">Vite</DescriptionLink>
        <Description>&nbsp;{"&"}&nbsp;</Description>
        <DescriptionLink href="https://styled-components.com/">styled-components</DescriptionLink>
        <Description>&nbsp;{"&"}&nbsp;</Description>
        <DescriptionLink href="https://pixiv.github.io/charcoal/docs/">pixiv/charcoal</DescriptionLink>
        <Description>.</Description>
      </Footer>
    </Layout>
  </ThemeProvider >
)

export default App
