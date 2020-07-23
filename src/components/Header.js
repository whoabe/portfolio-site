import React from "react"

// import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    {/* <span className="logo">
      <img src={logo} alt="" />
    </span> */}
    <h1>Abraham Ho</h1>
    <p>I like making things in Python and JavaScript.</p>
    <section>
      {/* <h2>Etiam feugiat</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(000) 000-0000 x 0000</dd>
                <dt>Email</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
            </dl> */}
      <ul className="icons">
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
  </header>
)

export default Header
