import React from "react"
import Layout from "../components/layout"
import ChapterList from "../components/chapterList";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import comicData from "../data/comicData";


export default ( data ) => {  
    let comicInfo = data.pageContext; 
    console.log(comicInfo);
    let heroImage = comicData[comicInfo.comicId].heroImage;
    console.log(heroImage);
    return (
    <Layout>
      <div className="comic-overview-banner">
      <img className="comic-overview-image" src={heroImage} alt={comicInfo.comicTitle}/>
      </div>
        <ChapterList comicInfo={comicInfo}/>
    </Layout>
  )
}