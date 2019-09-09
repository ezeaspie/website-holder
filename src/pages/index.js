import React , {Component} from "react"
import { Link } from "gatsby"
import moment from 'moment';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/Banner';
import comicData from '../data/comicData';

class IndexPage extends Component {
  render(){
    const data = this.props.data.allContentfulBlogPost.edges;

    return(
<Layout>
    <SEO title="Home" />
    <Banner/>
    <div className="container">
    <h4 className="main-header">Recent Blog Posts</h4>
    <div className="blog-preview-list">
      {
        data.map(({ node })=>{
          console.log(node);
          console.log(node.childContentfulBlogPostContentRichTextNode.json);
          return(
            <div className="blog-preview">
              <Link to={`/blog/${node.slug}`}>
              <div 
              className="blog-preview-image"
              style={{backgroundImage: `url(${node.coverImage.resize.src})`}}>
              </div>       
              <div className="blog-preview-content">
                <h5>{node.title}</h5>
                <h6>{moment(node.publishDate).format('MMMM DD YYYY')}</h6>
                <p>{documentToReactComponents(node.childContentfulBlogPostContentRichTextNode.json.content[0])}</p>
              </div>
              </Link>
            </div>
          )
        })
      }
    </div>
    <h4 className="main-header">Comics</h4>
    <div className="comic-index">
    {
      comicData.map((comic)=>{
        return(
          <Link className="comic-index-preview" to={comic.url} key={comic.title}>
            <div className="comic-index-preview-image" style={{backgroundImage:`url(${comic.image})`}}></div>
            <h4>{comic.title}</h4>
          </Link>
        )
      })
    }
    </div>
    </div>
  </Layout>
    )
  }
}

export default IndexPage

export const query = graphql `query{
  allContentfulGalleryItem {
    edges {
      node {
        id
        featured
        creationDate
        medium
        title
        image {
          fluid {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        description {
          description
        }
      }
    }
  }
  allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, limit: 5){
    edges {
      node {
        slug
        coverImage {
          resize(width: 300) {
            src
          }
          title
        }
        childContentfulBlogPostContentRichTextNode {
          json
        }
      title
      publishDate
      }
    }
  }
}`
