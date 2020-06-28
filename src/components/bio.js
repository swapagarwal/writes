/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Personal blog by <strong><a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">{author.name}</a></strong>, {author.summary}
        {` `}
        Savvy? <a href={`https://buttondown.email/swap`} target="_blank" rel="noopener noreferrer">💌 musings</a> &bull; <a href={`https://tinyletter.com/swap`} target="_blank" rel="noopener noreferrer">✍️ life updates</a> &bull; <a href={`https://www.getrevue.co/profile/swap`} target="_blank" rel="noopener noreferrer">🦄 startup journey</a> &bull; <a href={`https://swap.substack.com/`} target="_blank" rel="noopener noreferrer">🧪 creative lab</a>
        {` `}
      </p>
    </div>
  )
}

export default Bio
