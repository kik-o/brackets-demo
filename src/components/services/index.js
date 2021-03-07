import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import './services.css';
import Arrow from '../../images/arrow.svg';

const Services = () => (
  <StaticQuery
    query={graphql`
    query CardQuery {
      allContentfulServiceCard(sort: {fields: createdAt}) {
        edges {
          node {
            title
            url
            description
            thumbnail {
              fluid {
                src
                ...GatsbyContentfulFluid
              }
             }
            }
          }
        }
      }
   `}

   render={data => (
        <div className='card__container'>
            {data.allContentfulServiceCard.edges.map(edge => (
              <div key={edge.node.title} className='card'>
               <p className='card__title'>{edge.node.title}</p>
               <p className='card__subtitle'>{edge.node.description}</p>
               <a className='card__link' href={edge.node.url}>Learn more <Arrow className="arrow" /></a>
               <img className='card__thumbnail' alt='card preview' src={edge.node.thumbnail.fluid.src}/>
              </div>
            ))}
        </div>
     )}
   />
 )

 export default Services;