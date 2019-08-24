import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { Waypoint } from "react-waypoint"

import Layout from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
// import profile from "../assets/images/profile.png"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Abraham Ho" />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        {/* <Nav sticky={this.state.stickyNav} /> */}

        <Nav sticky={this.state.stickyNav} />
        <Header />

        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>
                  Creating things is my passion. I enjoy building mechanical
                  things, and now i'm reinventing myself to build software
                  things.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <span className="image">
                <img src={profile} alt="" />
              </span> */}
            </div>
          </section>

          <section id="portfolio" className="main special">
            <header className="major">
              <h2>Selected Personal Projects</h2>
            </header>
            <ul className="projects">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Splits</h3>
                <p>
                  Receipt image parsing and bill-splitting web app using google
                  vision AI, Flask, React.js, and AWS.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Abegram</h3>
                <p>
                  Social image sharing site inspired by Instagram using Flask
                  and AWS.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Socket.io Chat</h3>
                <p>React based chat using socket.io</p>
              </li>
            </ul>
            {/* <footer className="major">
                        <ul className="actions">
                            <li>
                                <Link to="/generic" className="button">
                                    Learn More
                  </Link>
                            </li>
                        </ul>
                    </footer> */}
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <dl className="alt">
                <div>
                  <dt>Phone</dt>
                  <dd>(408) 831-2156‬</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto: whoabe@gmail.com">whoabe@gmail.com</a>
                  </dd>
                </div>
              </dl>
            </header>
          </section>
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default Index
