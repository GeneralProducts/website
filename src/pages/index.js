import React from "react"
import { ThemeProvider, createTheme, Arwes, Words, Button, Footer, Code, SoundsProvider, createSounds } from 'arwes'
import { Link } from "gatsby"

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

export default () => (
  <ThemeProvider theme={createTheme(genproTheme)}>
    <SoundsProvider sounds={createSounds(mySounds)}>
      <Arwes animate background='/background.jpg' pattern='/glow.png'>
        <div className="page">
          <div className="main-wrapper">
            <div id="home" className="wrapper">
              <div className="container">
                <div className="glitch">
                  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="188">)
                    <title>General Products Ltd</title>
                    <rect className="a" x="71.943" y="117" width="27.057" height="27"/>
                    <rect className="a" x="72" width="54" height="27"/>
                    <rect className="a" x="63" y="54" width="63" height="27"/>
                    <rect className="a" x="99" y="81" width="27" height="63"/>
                    <rect className="a" x="153.168" width="63.251" height="27"/>
                    <rect className="a" x="153.168" y="54" width="63.251" height="27"/>
                    <rect className="a" x="153.168" y="81" width="27" height="63"/>
                    <rect className="a" x="270.168" width="27" height="90"/>
                    <rect className="a" x="270.168" y="117" width="90" height="27"/>
                    <rect className="a" x="378.168" y="54" width="27" height="90"/>
                    <rect className="a" x="342.168" width="99" height="27"/>
                    <rect className="a" x="459.168" width="27" height="54"/>
                    <rect className="a" x="459.168" y="90" width="27" height="54"/>
                    <rect className="a" x="486.168" width="18" height="27"/>
                    <rect className="a" x="486.168" y="117" width="18" height="27"/>
                    <path className="b" d="M423.285,373.5a27,27,0,1,1,0,54" transform="translate(-206.866 -360)"/>
                    <path className="c" d="M278.809,490.5a58.5,58.5,0,0,1,0-117" transform="translate(-206.866 -360)"/>
                    <path className="c" d="M710.437,373.5a58.5,58.5,0,0,1,0,117" transform="translate(-206.866 -360)"/>
                  </svg>
                </div>
                <h2>
                  <Words animate>
                    Manufacturers of fine hypertext pages
                  </Words>
                </h2>
                <Button layer="primary" animate>
                  <Link to="/initiatives/">Initiatives</Link>
                </Button>                { " " }
                <Button layer="primary" animate>
                  <Link to="/consonance/">Consonance publishing management software</Link>
                </Button>
                { " " }
                <Button layer="primary" animate>
                  <Link to="/projects/">Projects</Link>
                </Button>
              </div>
            </div>
          </div>
          <p>
          <Code animate type='pre' language='Javascript'>{
            `
            def status?
              return "This is a side-project work in progress" if Time.zone.now < Date.parse("2019-12-25")

              "Welcome to our amazing and completely finished corporate website!"
            end
            `}</Code>
          </p>
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
