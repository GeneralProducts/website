import React from "react"
import { Link } from "gatsby"

import { ThemeProvider, createTheme, withStyles, Arwes, Project, Paragraph, Words, Header, Footer } from 'arwes';

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
                  <img src='/logo.svg' alt='logo' className='logo'/>
                </Link>
                <ul className="nav">
                <li><Link to="/projects/">Projects</Link></li>
                <li><a href="https://consonance.app">Consonance</a></li>
                </ul>
              </div>
            </Header>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="main">
          <h3><Words animate>Consonance</Words></h3>
          <p>
            <Words animate>
              Information to follow...
            </Words>
            In the meantime, you can <a href="https://consonance.app">go to its main website.</a>
          </p>

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
