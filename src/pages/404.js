import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = ({ location }) => {
  return (
    <Layout pageSEO={{ title: "404: Not Found" }}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Layout>
  )
}

export default NotFoundPage