import React from "react"
import Layout from "../components/layout"
import ChapterList from "../components/chapterList";
import SEO from '../components/seo'

export default ( data ) => {  
    let comicInfo = data.pageContext; 
    return (
    <Layout>
        <SEO title={'Read ' + comicInfo.comicTitle} keywords={[`Heroine`, `Rises`, `comic`, 'Heroine Rises', 'read', 'online']} />
        <ChapterList comicInfo={comicInfo}/>
    </Layout>
  )
}