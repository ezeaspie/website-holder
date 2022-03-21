import React from "react"
import { Link } from "gatsby"
import WikiNav from "../components/wiki-nav"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Heroine Rises Wiki" />
    <div className="wikiNavContainer">
      <h1>Characters</h1>
      <p>A list of pages that focus on specific chararacters from Heroine Rises.</p>
      <WikiNav/>
    </div>
    
  </Layout>
)

export default SecondPage
