import React from "react"
import { ThemeProvider } from 'styled-components'
import { dark } from '@charcoal-ui/theme'
import { TextBox, LinkBox, WrapBox } from './components/TextBox'
import { Heading, SubHeading, Text, Link, Description, DescriptionLink, TextLink } from './components/base/Typography'
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
          <SubHeading>Work Experience</SubHeading>
          <WrapBox>
            <Text><TextLink href="https://github.com/saebasol">Saebasol</TextLink>Leader<br />2020.06.26 ~ </Text>
            <br />
            <Text><TextLink href="https://github.com/callistoteam">Team. Callisto</TextLink>Bot Developer<br />2020.08.12 ~ 2022.01.24</Text>
            <br />
            <Text><TextLink href="https://koreaminecraft.net">Korea Minecraft Forum</TextLink>Manager<br />2020.08.15 ~ </Text>
            <br />
            <Text><TextLink href="https://zbcounter.net/">CounterOnline</TextLink>Developer<br />2021.01.30 ~ </Text>
            <br />
            <Text><TextLink href="https://koreanbots.dev/">KOREANLIST</TextLink>SDK Developer<br />2021.07.10 ~ </Text>
            <br />
            <Text><TextLink href="https://team-crescendo.me/">Team Crescendo</TextLink>Developer<br />2021.07.19 ~ </Text>
            <br />
            <Text><TextLink href="https://korlark.com/">KorLARK</TextLink>Developer<br />2021.11.04 ~ </Text>
          </WrapBox>
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
