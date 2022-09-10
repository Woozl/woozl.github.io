import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/seo';
import { Email } from 'react-obfuscate-email';

import {socials, name} from './index.module.sass';
import SocialIcon from '../components/SocialIcon';

const Index = ({ location }: PageProps) => {
  return (
    <Layout location={location} pageTitle="Home">
      <SEO title="David Glymph" article={false} />
      <h1>Hello! My name is <span className={name}>David Glymph</span>.</h1>
      <p><em>I'm a full-stack web developer interested in building performant web apps with an emphasis on maintainable code and thoughtful UX/UI design.</em></p>
      <p><em>I have experience with React, Typescript, SCSS, GraphQL, PostgreSQL and more.</em></p>
      <hr></hr>
      <div className={socials}>
        <h2>Contact me:</h2>
        <ul>
          <li><Email email="david@davidglymph.com"><SocialIcon icon='envelope'/>Email</Email></li>
          <li><a href="https://github.com/Woozl" target="_blank" rel="noopener noreferrer"><SocialIcon icon='github'/>Github</a></li>
          <li><a href="https://linkedin.com/in/davidglymph" target="_blank" rel="noopener noreferrer"><SocialIcon icon='linkedin'/>LinkedIn</a></li>
        </ul>
      </div>
    </Layout>
  );
};

export default Index;