import React from "react"

import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { Paragraph } from "arwes"

export default () => (
  <Layout>
    <Nav />
    <div className="main-wrapper">
      <div className="wrapper">
        <div style={{ margin: 20 }}>
          <Paragraph>
            Content to follow
          </Paragraph>
        </div>
      </div>
    </div>
  </Layout>
)
