import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  primaryColor: '#ff4143',
  secondaryColor: '#ffefede6',
  headingFont: 'Staatliches, cursive',
  textFont: 'Open Sans, sans-serif'
}

const Index = () => (
  <>
    <Head>
      <title>Bilu</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <ThemeProvider theme={theme}>
      <Title>Bilu</Title>
    </ThemeProvider>
  </>
)

export default Index

const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.headingFont};
  text-align: center;
`
