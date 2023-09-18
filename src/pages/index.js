import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import BlogPostList from "../components/blogPostList"
import comicData from '../data/comicData'
import MainBanner from "../components/mainBanner"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(limit:6) {
        nodes {
          category
          title
          publishDate
          slug
          content{
            raw
          }
          coverImage {
            gatsbyImage(fit: CONTAIN, width: 1200)
          }
        }
      }
    }
  `)
  return (
      <Layout>
        <MainBanner/>
        <div className="container">
          <section className="blog-preview-list">
            <h4>News</h4>
            <BlogPostList data={data}></BlogPostList>
          </section>
          <section className="comic-index">
            <h4 className="main-header">Comics</h4>
            <div className="container">
              {
                comicData.map((comic)=>{
                  return(
                    <Link className="comic-index-preview" to={comic.secondUrl} key={comic.title}>
                      <div className="comic-index-preview-top">
                        <div className="comic-index-preview-image" style={{backgroundImage:`url(${comic.image})`}}></div>
                        <p className="comic-index-preview-tagline">{comic.tagline}</p>
                      </div>
                      <h4 className={comic.color + "-banner"}>{comic.title}</h4>
                    </Link>
                  )
                })
              }
            </div>
          </section>
        </div>
      </Layout>
  )
}

export default IndexPage


export const Head = () => <title>Home Page</title>
