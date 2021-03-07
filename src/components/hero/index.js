import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Arrow from "../../images/arrow.svg"
import "./hero.css"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query heroQuery {
        allContentfulHero {
          edges {
            node {
              copy
              subtitle
              title
              heroImage {
                featuredImage {
                  fluid(quality: 100, maxWidth: 1700) {
                    src
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
      }
    `}

    render={data => (
      <div>
        <div
          className="hero__image"
          style={{
            backgroundImage: `
             linear-gradient(360deg, #000000 13.96%, rgba(0, 0, 0, 0) 107.34%),
             linear-gradient(90deg, #000000 20.29%, rgba(0, 0, 0, 0) 100%),
             linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%),
             url(${data.allContentfulHero.edges[0].node.heroImage.featuredImage.fluid.src})`,
          }}
        ></div>
        {data.allContentfulHero.edges.map(edge => (
          <div className="hero__section">
            <div className="hero__content">
              <div className="hero__info">
                <div className="hero__subtitle">{edge.node.subtitle}</div>
                <div className="hero__title">{edge.node.title}</div>
                <div className="hero__copy">{edge.node.copy}</div>
                <div className="btn__primary">
                  <a href="#/">
                    Get Started <Arrow className="arrow" />
                  </a>
                </div>
                <div className="btn__secondary">
                  <a href="#/">
                    Request a demo <Arrow className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)

export default Hero
