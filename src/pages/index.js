import React from "react"
// import { Link } from "gatsby"
import Helmet from "react-helmet"
import { Waypoint } from "react-waypoint"

import Layout from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import profile from "../assets/images/profile.png"

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
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={profile} alt="" />
              </span>
            </div>
          </section>

          <section id="portfolio" className="main special">
            <header className="major">
              <h2>Selected Personal Projects</h2>
            </header>
            <ul className="projects">
              <li>
                <a href="https://todo-tracker1.herokuapp.com">
                  <span className="icon major style1 fa-code"></span>
                </a>
                <h3>
                  <a href="https://todo-tracker1.herokuapp.com">
                    Todo Time Tracker
                  </a>
                </h3>
                <p>
                  Task Tracker based on Pomodoro Technique using the MERN stack.
                </p>
              </li>
              <li>
                <a href="https://splits.netlify.com">
                  <span className="icon major style1 fa-code"></span>
                </a>
                <h3>
                  <a href="https://splits.netlify.com">Splits</a>
                </h3>
                <p>
                  Receipt image parsing and bill-splitting web app using google
                  vision AI, Flask, React.js, and AWS.
                </p>
              </li>
              <li>
                <a href="https://github.com/whoabe/socket-chat">
                  <span className="icon major style5 fa-comments"></span>
                </a>
                <h3>
                  <a href="https://github.com/whoabe/socket-chat">
                    Socket.io Chat
                  </a>
                </h3>
                <p>Chat app using Socket.io and React.js</p>
              </li>
              <li>
                <a href="https://github.com/whoabe/bjak">
                  <span className="icon major style1 fa-code"></span>
                </a>
                <h3>
                  <a href="https://github.com/whoabe/bjak">Movie Gallery</a>
                </h3>
                <p>
                  Movie Gallery using React.Js and pulling information from
                  Hooqtv. ~Coding Challenge
                </p>
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
