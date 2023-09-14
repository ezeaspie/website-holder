import React from "react"
import Layout from "../components/layout"
import ChapterList from "../components/chapterList";

export default ( data ) => {  
    let comicInfo = data.pageContext; 
    return (
    <Layout>
        <ChapterList comicInfo={comicInfo}/>
    </Layout>
  )
}