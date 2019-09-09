const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
var fs = require('fs');

let comicData = [];
fs.readFile(`./src/data/comicData.json`, 'utf8', function (err, data) {
  if (err) throw err;
  comicData = JSON.parse(data);
  console.log(comicData);
});

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions  
    // Create pages for each COMIC entry.
    const template = path.resolve(`./src/templates/comic-page.js`);
    comicData.forEach(( chapter ) => {
      const comicNames = [
        "Heroine Rises",
        "One Shots"
      ]
  
      const comicNameURL = [
        "heroine-rises",
        "one-shots"
      ]
  
      let chapterTitle = chapter.title;
      let comicId = comicNameURL[chapter.comicId];
      let chapterId = chapter.chapter;
      let chapterPages = chapter.pages;
      let comicName = comicNames[chapter.comicId];
      let comicSeriesID = chapter.comicId;
  
      let filteredData = comicData.filter((dataObj) => {
        return dataObj.comicId === comicSeriesID;
      });
  
      if(filteredData.length > 20){
        filteredData = filteredData.slice(-20);
      }
  
      filteredData.reverse();
  
      for (let i = 0 ; i<chapterPages ; i++){
        let pathName = `${comicId}/${chapterId}/${i}`
        console.log(pathName);
        let currentPage = i;
        createPage({
          path:pathName,
          component: template,
  
          // Send additional data to page from JSON (or query inside template)
          context: {
            comicData:filteredData,
            slug:pathName,
            chapterTitle,
            comicName,
            chapterPages,
            chapterId,
            currentPage,
            comicId: comicSeriesID,
          }
        });
      }
      
      });
      let harbourComicFiltered = comicData.filter((dataObj)=>{
        return dataObj.comicId === 0;
      })

      let oneShotsFiltered = comicData.filter((dataObj)=>{
        return dataObj.comicId === 1;
      })

      createPage({
        path: `heroine-rises`,
        component:path.resolve(`./src/templates/comic-overview.js`),
        context:{
          comicData: harbourComicFiltered,
          comicId:0,
          comicTitle:"Heroine Rises"
        }
      })
      createPage({
        path:'one-shots',
        component:path.resolve(`./src/templates/comic-overview.js`),
        context:{
          comicData:oneShotsFiltered,
          comicId:1,
          comicTitle:"One Shots"
        }
      })
      return graphql(
        `
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
                coverImage {
                  resize(width: 300) {
                    src
                  }
                }
                childContentfulBlogPostContentRichTextNode {
                  json
                }
                publishDate
                title
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors){
          throw result.errors
        }
        const blogTemplate = path.resolve(`./src/templates/blog-post.js`);
        console.log(result.data.allContentfulBlogPost.edges);
        result.data.allContentfulBlogPost.edges.forEach((post)=>{
          createPage({
            path:'blog/' + post.node.slug,
            component: blogTemplate,
            context:{
              slug:post.node.slug,
            }
          })
        })
      })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
