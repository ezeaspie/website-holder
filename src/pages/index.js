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
            <h2 className="section-header">News</h2>
            <BlogPostList data={data}></BlogPostList>
          </section>

          <section>
            <h2 className="section-header">Comics</h2>
            <div className="comics-preview-list">
                {
                  comicData.map((comic)=>{
                    return(
                      <div className="comic-preview-item">
                        <Link className="comic-preview-link-full" to={comic.secondUrl} key={comic.title}></Link>
                        <img src={comic.image} alt={comic.title}/>
                        <div className="comic-preview-content">
                          <p className="comic-preview-tagline">{comic.tagline}</p>
                          <Link className="comic-preview-link" to={comic.secondUrl} key={comic.title}>{'Read Now >>'}</Link>
                        </div>
                      </div>
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


export const Head = () => (
  <>
  <title>Home Page</title>
  </>
)
