import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Layout from '../components/layout';
import CodeBlock from '../components/codeblock'
import { titleHeader } from './post.module.sass'

import 'katex/dist/katex.min.css';
import SEO from '../components/seo';

interface Props {
    location: Location;
    data: {
        mdx: {
            frontmatter: {
                title: string;
                date: string;
                summary: string | null;
                thumb: any;
            }
            timeToRead: number;
            tableOfContents: any;
            body: string;
        }
    }
}

const BlogPost = ({ location, data }: Props) => {
    return (
        <Layout location={location} pageTitle={data.mdx.frontmatter.title}>
            <SEO
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.summary || undefined}
                image={data.mdx.frontmatter.thumb?.childImageSharp.original.src}
                article={true}
            />
            <div className={titleHeader}>
                <h1><i>{data.mdx.frontmatter.title}</i></h1>
                <p>{`${data.mdx.frontmatter.date} • ${data.mdx.timeToRead} minute${data.mdx.timeToRead>1 ? "s" : ""}`}</p>
            </div>
            <MDXProvider components={{pre: CodeBlock}}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                summary
                thumb {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
            }
            timeToRead
            tableOfContents
            body
        }
    }
`