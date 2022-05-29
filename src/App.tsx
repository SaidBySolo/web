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
  order: 0;
  @media screen and (max-width: 768px){
    order: 1;
  }
  flex-direction: column;
`

const Heading = styled.h1`
  @media screen and (max-width: 768px){
    margin-top: 0;
  }
  ${theme(o => [o.font.text1, o.margin.horizontal(40), o.margin.top(40), o.margin.bottom(16)])}
`

const SubHeading = styled.h2`
  ${theme(o => [o.font.text1, o.margin.horizontal(40), o.margin.top(0), o.margin.bottom(24)])}
`

const TextLink = styled.a`
  ${theme(o => [o.font.text2, o.margin.horizontal(40), o.margin.top(0), o.margin.bottom(16)])}
`

const Profile = styled(Center)`
  order: 1;
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
