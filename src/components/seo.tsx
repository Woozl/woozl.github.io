import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description?: string;
    image?: string;
    article?: boolean;
};

const SEO = ({ title, description, image, article }: Props) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        defaultImage,
        siteUrl
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`
    };

    return (
        <Helmet htmlAttributes={{lang: `en`}}>
            <meta name="description" content={seo.description} />

            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {(article ? true : null) && <meta property="og:type" content="article" />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {/* {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )} */}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

export default SEO;

const query = graphql`
    query {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                defaultImage: image
                siteUrl
            }
        }
    }
`