import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { dark, CharcoalTheme } from '@charcoal-ui/theme'
import createTheme from '@charcoal-ui/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme { }
}

const theme = createTheme<CharcoalTheme>(styled)

const Flex = styled.div`
  display: flex;
`

const Center = styled(Flex)`
  justify-content: center;
  align-items: center;
`

const MainFlexBox = styled(Center)`
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  ${theme(o => [o.bg.background1])}
`

const InfoBox = styled(Flex)`
  height: 25rem;
  width: 42.5rem;
  flex-direction: center;
  @media screen and (max-width: 768px){
    height: 30rem;
    width: 20rem;
    flex-direction: column;
  }
  ${theme(o => [o.bg.surface2, o.borderRadius(24)])}
`

const TextBox = styled(Flex)`
  width: 30rem;
  @media screen and (max-width: 768px){
    width: 20rem;
    order: 1;
  }
  flex-direction: column;
`

const Heading = styled.h1`
  @media screen and (max-width: 768px){
    font-size: 1.5rem;
    margin-top: 0px
  }
  ${theme(o => [o.font.text1, o.margin.horizontal(40), o.margin.top(40), o.margin.bottom(16)])}
`

const SubHeading = styled.h2`
  @media screen and (max-width: 768px){
    ${theme(o => [o.typography(20)])}
  }
  ${theme(o => [o.font.text1, o.margin.horizontal(40), o.margin.top(0), o.margin.bottom(24)])}
`

const Text = styled.span`
  @media screen and (max-width: 768px){
    margin-bottom: 24px;
    margin-top: 0px;
    ${theme(o => [o.typography(16)])}
  }
  ${theme(o => [o.font.text2, o.typography(20), o.margin.horizontal(40), o.margin.top(24), o.margin.bottom(64)])}
`

const TextLink = styled.a`
  @media screen and (max-width: 768px){
    ${theme(o => [o.typography(12)])}
  }
  ${theme(o => [o.font.text4, o.margin.horizontal(40), o.margin.top(0), o.margin.bottom(16)])}
`



const Profile = styled(Center)`
  @media screen and (max-width: 768px){
    order: 0;
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  content:url("https://avatars.githubusercontent.com/u/33891531?v=4");
  ${theme(o => [o.height.px(168), o.width.px(168), o.margin.all(40)])}
`

const App = () => (
  <ThemeProvider theme={dark}>
    <MainFlexBox>
      <InfoBox>
        <TextBox>
          <Heading>
            Ryu Juheon
          </Heading>
          <SubHeading>
            a.k.a SaidBySolo
          </SubHeading>
          <Text>
            Python {'&'} JavaScript Developer
          </Text>
          <TextLink href="https://github.com/SaidBySolo">
            Github
          </TextLink>
          <TextLink href="https://twitter.com/SaidBySolo">
            Twitter
          </TextLink>
          <TextLink href="https://discord.com/users/345265069132742657">
            Discord
          </TextLink>
        </TextBox>
        <Profile>
          <ProfileImage alt="Profile image" />
        </Profile>
      </InfoBox>
    </MainFlexBox>
  </ThemeProvider >
)
export default App
