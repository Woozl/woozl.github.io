import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { projectGrid, infoContainer } from './projects.module.sass';

interface Node {
    frontmatter: {
      title: string;
      date: string;
      summary: string;
      link_to_demo: string;
      thumb: any;
      thumb_alt: string
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

const Projects = ({ location, data }: Props) => {
    return (
        <Layout location={location} pageTitle='Projects'>
            <SEO title="Projects" article={false} />
            <div className={projectGrid}>
                {
                  data.allMdx.nodes.map((node: Node) => {
                      const image = getImage(node.frontmatter.thumb);

                      return(
                        <section key={node.id}>
                              {image && (<GatsbyImage image={image} alt={node.frontmatter.thumb_alt}/>)}
                              <div className={infoContainer}>
                                <div>
                                  <Link to={`/${node.slug}`}>
                                      <h1>{node.frontmatter.title} →</h1>
                                  </Link>
                                  <p>{node.frontmatter.date}</p>
                                </div>
                                <p>{node.frontmatter.summary}</p>
                                {node.frontmatter.link_to_demo === '' ? 
                                  null : <a href={node.frontmatter.link_to_demo} target="_blank" rel="noopener noreferrer">View demo</a>
                                }
                              </div>
                          </section>
                      );
                  })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/projects/"}}
      ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          summary
          link_to_demo
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          thumb_alt
        }
        id
        timeToRead
        slug
      }
    }
  }
`

export default Projects;