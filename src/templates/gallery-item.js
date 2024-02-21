import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ( data ) => {  
    let galleryItem = data.pageContext;
    console.log(galleryItem); 
    return (
    <Layout>
      <div className="gallery-showcase">
        <GatsbyImage
        className="gallery-showcase-image"
        image={getImage(galleryItem.image.gatsbyImage)}
        alt={galleryItem.title}></GatsbyImage>
        <div className="gallery-showcase-info">
          <h1>{galleryItem.title}</h1>
          <h2>{galleryItem.medium}</h2>
          <p>{galleryItem.description.description}</p>
        </div>
      </div>
      
    </Layout>
  )
}