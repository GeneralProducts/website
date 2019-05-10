import React from "react"
import { Header } from "arwes"
import { Link } from "gatsby"

export default () => (
  <div className="header-wrapper">
    <div className="header">
      <Header animate>
        <div className="header-inner">
          <ul className="nav">
            <li><Link to="/">
              <img src="/logo.png" class="logo" alt="logo" />
            </Link></li>
            <li><Link to="/initiatives/">Initiatives</Link></li>
            <li><Link to="/software/">Software</Link></li>
            <li><Link to="/projects/">Side projects</Link></li>
          </ul>
        </div>
      </Header>
    </div>
  </div>
)
