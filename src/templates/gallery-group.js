import React, {useState} from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

export default ( data ) => {
    function convertToSlug(string) {
      return string
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '-') // Replace whitespace with hyphens
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters and hyphens
        .replace(/-{2,}/g, '-') // Replace consecutive hyphens with a single hyphen
        .replace(/^-|-$/g, ''); // Remove hyphens from the beginning and end of the string
    } 
  
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(0);
    
    console.log(overlayVisible);

    let galleryItem = data.pageContext;

    const handleClick = (e) =>{
      setOverlayVisible(true);
      setSelectedItemId(e.target.id);
    }

    console.log(galleryItem); 
    return (
    <Layout>
      <div className="gallery-wrapper">

        <div className={!overlayVisible?"gallery-overlay gallery-hidden":"gallery-overlay"}>
          <button
          className="exit-button"
          onClick={()=>setOverlayVisible(false)}>
            X
          </button>
        <GatsbyImage
        image={getImage(galleryItem.imageCollectionData[selectedItemId].image.gatsbyImage)}
        className="gallery-overlay-image"
        ></GatsbyImage>
      </div>


        <div className="gallery-group-header">
          <GatsbyImage image={galleryItem.coverImage.gatsbyImage} alt={galleryItem.title + " by Ezequiel Espinoza Diaz"}></GatsbyImage>
          <h1>{galleryItem.title}</h1>
          <h2>{galleryItem.subtitle}</h2>
        </div>
        <div className="gallery-group-grid">
          {galleryItem.imageCollectionData.map((collectionItem,i) =>{
            return(
              <Link
              onClick={handleClick}
              to={"/gallery/" + convertToSlug(collectionItem.title)}
              className="gallery-group-item">
                <GatsbyImage
                id={i}
                class="gallery-group-image"
                image={getImage(collectionItem.image.gatsbyImage)}
                alt={collectionItem.title}>
                </GatsbyImage>
                <h3 className="gallery-group-item-tagline">
                  {collectionItem.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
      
      
    </Layout>
  )
}