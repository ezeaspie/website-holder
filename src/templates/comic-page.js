import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Reader from '../components/reader';
import comicData from '../data/comicData';

export default ( data ) => {  
    let chapterInfo = data.pageContext; 
    console.log(chapterInfo);
    let comicName = comicData[chapterInfo.comicId].title;
    return (
    <Layout>           
        <Reader chapterInfo={chapterInfo}/>
    </Layout>
  )
}

export const query = graphql`  
query($slug:String!){
allSitePage(filter:{context:{slug:{eq:$slug}}}){
    nodes{
        pageContext
    }  
    }
}`