import React from "react"
import { ThemeProvider, createTheme, Arwes, Footer, SoundsProvider, createSounds } from 'arwes'
import '../styles/global.scss'

const genproTheme = {
  color: {
    primary: {
      base: '#C0BBB6',
      dark: '#f3095c',
      light: '#E4CFFF'
    },
    header: {
      base: '#FCFAF8',
      dark: '#4A4541',
      light: '#F5F2EF'
    }
  }
}

const mySounds = {
  shared: { volume: 1 },  // Shared sound settings
  players: {  // The player settings
    click: {  // With the name the player is created
      sound: { src: ['/information.mp3'] }  // The settings to pass to Howler
    },
    typing: {
      sound: { src: ['/information.mp3'] },
      settings: { oneAtATime: true }  // The custom app settings
    },
    deploy: {
      sound: { src: ['/deploy.mp3'] }
    },
  }
}
export default ({ children }) => (

  <ThemeProvider theme={createTheme(genproTheme)}>
    <SoundsProvider sounds={createSounds(mySounds)}>
      <Arwes animate background='/background.jpg' pattern='/glow.png'>
        <div className="page">
          {children}
          <div className="footer-wrapper">
            <div className="footer">
              <Footer animate>
                  <div className="footer-inner">
                    <a href="http://twitter.com/consonance_app">Twitter </a>
                    |
                    <a href="https://consonance.app"> Consonance website </a>
                    |
                    <a href="mailto:info@consonance.app"> Contact </a>
                  </div>
              </Footer>
            </div>
          </div>
        </div>
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
)