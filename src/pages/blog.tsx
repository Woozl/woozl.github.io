import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import {blogPostCard} from './blog.module.sass';
import SEO from '../components/seo';

interface Node {
  frontmatter: {
    title: string;
    date: string;
    summary: string;
  }
  timeToRead: number;
  id: string;
  slug: string;
}

interface Props {
  location: Location;
  data: {
    allMdx: {
      nodes: [ Node ]
    }
  }
}

const Blog = ({ location, data }: Props) => {
  return (
    <Layout location={location} pageTitle="">
        <SEO title="Blog" article={false} />
        {
          data.allMdx.nodes.map((node: Node) => (
            <article className={blogPostCard} key={node.id}>
              <div>
                <h1><Link to={`/${node.slug}`}>{node.frontmatter.title + " →"}</Link></h1>
                <p>{node.timeToRead + " " + ((node.timeToRead>1)?"minutes":"minute")} • {node.frontmatter.date}</p>
              </div>  
              {node.frontmatter.summary !== null && (<p>{node.frontmatter.summary}</p>)}
            </article>
          ))
        }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          summary
        }
        id
        timeToRead
        slug
      }
    }
  }
`

export default Blog;