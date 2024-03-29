import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { container } from './layout.module.sass';
import { Helmet } from 'react-helmet';

import Navbar from './navbar';

interface DataProps {
    location: Location;
    pageTitle: string;
    children?: React.ReactNode;
}

const Layout = ({ location, pageTitle, children }: DataProps) => {
    const isRoot = location.pathname === '/';

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className={container}>
            <Helmet>
                <title>{`${pageTitle} | ${data.site.siteMetadata.title}`}</title>
            </Helmet>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            {
                !isRoot && (<footer>✨</footer>)
            }
        </div>
    )
}

export default Layout;