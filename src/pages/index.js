import React from "react"
import { Words, Button, Paragraph } from 'arwes'

import Layout from "../components/Layout"

import { Link } from "gatsby"

export default () => (
  <Layout>
    <div className="main-wrapper">
      <div id="home" className="wrapper">
        <div className="container">
          <div className="glitch">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 575.628 144">)
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
          <h1>
            <Words animate show>
              General Products Ltd
            </Words>
          </h1>
          <h2>
            <Words animate>
              Manufacturers of fine hypertext pages
            </Words>
          </h2>
          <Button layer="primary" animate>
            <Link to="/initiatives/">Initiatives</Link>
          </Button>
          { " " }

          <Button layer="primary" animate>
            <Link to="/software/">Software</Link>
          </Button>
          { " " }
          <Button layer="primary" animate>
            <Link to="/projects/">Side projects</Link>
          </Button>
          <p>
            <Paragraph animate>
              - Under construction  <a href="https://github.com/GeneralProducts/website">Code</a> -
            </Paragraph>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
