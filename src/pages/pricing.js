import React from "react"
import { Link } from "gatsby"
import Calculator from "../components/Calculator"

import { ThemeProvider, createTheme, Arwes, Project, Paragraph, Heading, Button, Header, Footer } from 'arwes';

const genproTheme = {
  color: {
    primary: {
      base: '#C0BBB6',
      dark: '#4A4541',
      light: '#E4CFFF'
    },
    header: {
      base: '#FCFAF8',
      dark: '#4A4541',
      light: '#F5F2EF'
    }
  }
};

// Custom component styles
const styles = theme => ({
  root: {
    padding: [theme.padding, 0],
    background: theme.background.primary.level0
  },
  title: {
    "font-size": "20px"
  }
});


export default () => (
  <ThemeProvider theme={createTheme(genproTheme)}>
    <Arwes animate background='/background.jpg' pattern='/glow.png'>
      <div className="page">
        <div className="header-wrapper">
          <div className="header">
            <Header animate>
              <div className="header-inner">
                <Link to="/">
                  <img src='/logo.svg'/>
                </Link>
                <ul className="nav">
                <li><Link to="/pricing/">Pricing</Link></li>
                <li><Link to="/projects/">Projects</Link></li>
                <li><Link to="https://consonance.app">Consonance</Link></li>
                </ul>
              </div>
            </Header>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="main">
          <Project
              animate
              header='How much does it cost'
          >
          <Calculator />
          </Project>
            </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer">
            <Footer animate>
              <div className="footer-inner">
                <a href="http://twitter.com/consonance_app">Twitter</a>
              </div>
            </Footer>
          </div>
        </div>
      </div>
    </Arwes>
  </ThemeProvider>
)
