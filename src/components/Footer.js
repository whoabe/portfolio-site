import React from "react"
// import { Link } from "gatsby"

// import logo from "../assets/images/logo.svg"
//
const Footer = props => (
  <footer id="footer">
    <section>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/AbrahamHo4"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/whoabe/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/whoabe" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abraham-ho-63b76134/"
            className="icon fa-linkedin alt"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/8227682/abe"
            className="icon fa-stack-overflow alt"
          >
            <span className="label">Stack Overflow</span>
          </a>
        </li>
      </ul>
    </section>
    {/* <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p> */}
  </footer>
)

export default Footer
