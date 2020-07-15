import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ marginTop: rhythm(2.5) }}>
        <div style={{ float: `right` }}>
          <a href={`rss.xml`} target="_blank" rel="noopener noreferrer">rss</a>
        </div>
        <a href={`https://twitter.com/SwapAgarwal`} target="_blank" rel="noopener noreferrer">twitter</a>
        {' '}&bull;{' '}
        <a href={`https://github.com/swapagarwal`} target="_blank" rel="noopener noreferrer">github</a>
        {' '}&bull;{' '}
        <a href={`https://www.linkedin.com/in/swapagarwal/`} target="_blank" rel="noopener noreferrer">linkedin</a>
      </footer>
    </div>
  )
}

export default Layout
