import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/seo';
import { Email } from 'react-obfuscate-email';

const Index = ({ location }: PageProps) => {
  return (
    <Layout location={location} pageTitle="Home">
      <SEO title="David Glymph" article={false} />
      {/* <StaticImage src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large' alt='alt desc'></StaticImage> */}
      <h1>Hello! My name is David Glymph.</h1>
      <p><em>I'm a front-end developer interested in building performant web apps with an emphasis on maintainable code and thoughtful UX/UI design.</em></p>
      <p><em>I have experience with React, Typescript, SCSS, GraphQL, and more.</em></p>
      <hr></hr>
      <h2>Contact me</h2>
      <ul>
        <li><Email email="david@davidglymph.com">Email</Email></li>
        <li><a href="https://github.com/Woozl" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href="https://linkedin.com/in/davidglymph" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </Layout>
  );
};

export default Index;