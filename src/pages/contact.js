import React from "react"

import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { Words } from 'arwes'

export default () => (
  <Layout>
    <Nav/>

    <div id="home" className="wrapper">
      <div className="container">
        <h1>
          <Words animate show>
            General Products Ltd
          </Words>
        </h1>
        <h2>
          <Words animate>
            55 North Street, Thame, OXON OX9 3BH
          </Words>
        </h2>
      </div>

    </div>
  </Layout>
)
