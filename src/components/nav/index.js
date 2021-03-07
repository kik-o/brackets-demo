import React from "react"
import Arrow from "../../images/arrow.svg"
// import Logo from '../../images/brackets-logo.svg';
import { graphql, StaticQuery } from "gatsby"
import "./nav.css"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allContentfulLogo {
          edges {
            node {
              logo {
                svg {
                  dataURI
                }
              }
            }
          }
        }
        allContentfulNavLink {
          edges {
            node {
              title
              url
            }
          }
        }
        allContentfulCallToAction(filter: { primary: { eq: true } }) {
          edges {
            node {
              title
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <div className="nav__items">
          <a className="nav__item--left" href="#/">
            <img
              className={"nav__item--logo"}
              src={data.allContentfulLogo.edges[0].node.logo.svg.dataURI}
              alt='Brackets Logo'
            />
          </a>
          {data.allContentfulNavLink.edges.map(edge => (
            <a key={edge.node.id} className={"nav__item--link"} href={edge.node.url}>
              {edge.node.title}
            </a>
          ))}
          <a className={"nav__item--cta"} href="#/">
            {data.allContentfulCallToAction.edges[0].node.title}
            <Arrow className="arrow" />
          </a>
        </div>
      </nav>
    )}
  />
)

export default Nav
