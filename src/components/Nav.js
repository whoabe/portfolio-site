import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"

const Nav = props => (
  <nav id="nav" className={props.sticky ? "alt" : ""}>
    <Scrollspy
      items={["about", "portfolio", "second", "cta"]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="about">
          <a href="/">About</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="portfolio">
          <a href="/">Portfolio</a>
        </Scroll>
      </li>
      {/* <li>
        <Scroll type="id" element="experience">
          <a href="#">Experience</a>
        </Scroll>
      </li> */}
      <li>
        <Scroll type="id" element="contact">
          <a href="/">Contact</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
