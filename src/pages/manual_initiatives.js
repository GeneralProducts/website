import React from "react"

import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { Project, Words, Image, Link, Row, Col } from "arwes"
import SocialMediaIcons from 'react-social-media-icons';

const socialMediaIcons = [
  {
    url: 'https://github.com/EmmaB/sideprojectsummer',
    className: 'fa-github-square',
  },
  {
    url: 'https://twitter.com/sideprosummer',
    className: 'fa-twitter',
  },
]

const botsocialMediaIcons = [
  {
    url: 'https://twitter.com/bot_publishing',
    className: 'fa-twitter',
  },
]

export default () => (
  <Layout>
    <Nav />
    <div className="main-wrapper">
      <div id="initiatives" className="wrapper">
        <div className="container">
          <div style={{ padding: 20 }}>
            <Project
              animate
              header='SIDE PROJECT SUMMER'
            >
              <Row>
                <Col s={12}>
                  <Row nested noMargin>
                    <Col s={4}>
                      <Image animate resources='/sps.png'>
                        <Link className='success' href='https://sideprojectsummer.com'>SideProjectSummer.com</Link>
                      </Image>
                      <SocialMediaIcons
                        icons={socialMediaIcons}
                        iconSize={'1.3em'}
                        iconColor={'#ffffff'}
                      />
                      </Col>
                      <Col s={8}>
                        <p>
                          <Words animate show="true">
                            To get momentum on publishers' increasing enthusiasm for code, #SideProjectSummer encourages carving out time for coding.
                            Accordingly, every Friday afternoon, we all convene on Twitter to compare notes on our side projects. It's fantastic to see all the things people are doing with their growing technical literacy.
                          </Words>
                          <p>
                            Check out <Link className='success' href='https://twitter.com/search?q=%23SideProjectSummer&src=typeahead_click&f=live'>#SideProjectSummer on Twitter</Link> for the latest updates.
                          </p>
                        </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Project>
          </div>

          <div style={{ padding: 20 }}>
            <Project
              animate
              header='CODING FOR PUBLISHERS'
            >
              <Row>
                <Col s={12}>
                  <Row nested noMargin>
                    <Col s={4}>
                      <Image animate resources='/faber.jpg'>
                        Coding at Faber & Faber
                      </Image>
                      </Col>
                      <Col s={8}>
                        <p>
                          <Words animate show="true">
                            We run occasional coding sessions and courses for organisations such as Book Machine, eLife Sciences, the London Book Fair, SYP, and universities.
                          </Words>
                          <p>
                            Often we make these free to attend. We announce such courses on Twitter. Contact us if you'd like us to quote for a private coding course for your organisation.
                          </p>
                        </p>
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Project>
          </div>

          <div style={{ padding: 20 }}>
            <Project
              animate
              header="Publishers' Advice Bot"
            >
              <Row>
                <Col s={12}>
                  <Row nested noMargin>
                    <Col s={4}>
                      <Image animate resources='/bot.png'>
                        Beep!
                      </Image>
                      <SocialMediaIcons
                        icons={botsocialMediaIcons}
                        iconSize={'1.3em'}
                        iconColor={'#ffffff'}
                      />
                      </Col>
                      <Col s={8}>
                        <p>
                          <Words animate show="true">
                          A cheerful and informative advice bot for book publishers.
                          Say “help” to me, and I'll give you some invaluable publishing advice!

                        </Words>
                        </p>
                        <p>
                        <br/>
                        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">DVD! ISBN? Only if it is educational/instructional! Octonauts? Oooh, grey area!</p>&mdash; Publishers&#39; Advice Bot (@bot_publishing) <a href="https://twitter.com/bot_publishing/status/1126828137776648193?ref_src=twsrc%5Etfw">May 10, 2019</a></blockquote>

                        </p>
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Project>
          </div>

          <div style={{ padding: 20 }}>
            <Project
              animate
              header='Volunteering'
            >
              <Row>
                <Col s={12}>
                  <Row nested noMargin>
                    <Col s={4}>
                      <Image animate resources='/railsgirls.jpg'>
                        Railsgirls
                      </Image>
                      </Col>
                      <Col s={8}>
                        <p>
                          <Words animate show="true">
                            We are proud to be long-time volunteers at RailsGirls London.
                          </Words>
                        </p>
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Project>
          </div>

          <div style={{ padding: 20 }}>
            <Project
              animate
              header='TALKS, writing & events'
            >
              {anim => (
                <p>
                  <Words animate show={anim.entered}>
                    Bookmachine unplugged
                    London Book Fair
                  </Words>
                </p>
              )}
            </Project>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
