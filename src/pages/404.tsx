import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
interface Props {
  location: Location
}

const NotFoundPage = ({ location }: Props) => {


  return (
    <Layout location={location} pageTitle="404">
      <h1>404 - Page not found</h1>
      <p><Link to="/">Go home.</Link></p>
    </Layout>
  )
}

export default NotFoundPage
