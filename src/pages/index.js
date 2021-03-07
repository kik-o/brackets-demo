import * as React from "react";
import Nav from '../components/nav';
import Hero from '../components/hero';
import Services from '../components/services';
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Brackets`,`Adventure`,`Gaming`]}/>
    <Nav />
    <Hero />
    <Services />
  </Layout>
)

export default IndexPage;
