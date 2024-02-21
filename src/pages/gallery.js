import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

function convertToSlug(string) {
  return string
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace whitespace with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters and hyphens
    .replace(/-{2,}/g, '-') // Replace consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, ''); // Remove hyphens from the beginning and end of the string
}


const GalleryPage = () => {
    const raw = useStaticQuery(graphql`
    query{
        allContentfulGalleryItem {
    nodes {
      creationDate
      title
      id
      medium
      image {
        gatsbyImage(fit: COVER, width: 500)
      }
    }
  }
  allContentfulGalleryCollectionItem {
    nodes {
      desc
        title
        subtitle
      imageCollectionData {
        image{
          gatsbyImage(fit: COVER, width: 500)
        }
      }
      coverImage {
        gatsbyImage(fit: COVER, width: 1000)
      }
    }
  }
    }
    `);
    const data = raw.allContentfulGalleryItem.nodes;
    const groupData = raw.allContentfulGalleryCollectionItem.nodes;

    console.log(groupData);
    return(
        <Layout>
            {/* <div>
                <h1>Gallery</h1>
                {data.map((entry)=>{
                    return(
                        <div>
                             <GatsbyImage
                            image={getImage(entry.image.gatsbyImage)}
                            alt={"hi"}
                            />
                            <h2>{entry.title}</h2>
                        </div>
                    )
                })}
            </div> */}
            <section className="gallery-group-list">
                {groupData.map((entry)=>{
                    console.log(entry);
                    return(
                        <div className="gallery-group-tile">
            

                        <GatsbyImage
                        className="gallery-group-tile-image"
                        image={getImage(entry.coverImage.gatsbyImage)}
                        layout="fixed"
                        aspectRatio={16/9}
                        alt={"hi"}
                        />

                        <Link className="gallery-group-tile-title" to={convertToSlug(entry.title)}>
                          <h2>{entry.title}</h2>
                          <h3>{entry.subtitle}</h3>
                          </Link>

                        </div>
                    )
                })}
            </section>
        </Layout>
    )
}

export default GalleryPage