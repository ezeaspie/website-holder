const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
var fs = require('fs');

function convertToSlug(string) {
  return string
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace whitespace with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters and hyphens
    .replace(/-{2,}/g, '-') // Replace consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, ''); // Remove hyphens from the beginning and end of the string
}

let comicData = [];
let charSettData = [];
fs.readFile(`./src/data/comicData.json`, 'utf8', function (err, data) {
  if (err) throw err;
  comicData = JSON.parse(data);
});
fs.readFile(`./src/data/characterSettingData.json`, 'utf8', function (err, data) {
  if (err) throw err;
  charSettData = JSON.parse(data);
});

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SitePage implements Node {
      context: SitePageContext
    }
    type SitePageContext {
      slug: String
    }
  `)
}

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions  

    // Create pages for each COMIC entry.
    const template = path.resolve(`./src/templates/comic-page.js`);
    comicData.forEach(( chapter ) => {
      const comicNames = [
        "Heroine Rises",
        "One Shots",
        "FireStarter"
      ]
  
      const comicNameURL = [
        "heroine-rises",
        "one-shots",
        "firestarter"
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
  
    let pathName = `${comicId}/${chapterId}`
      console.log(pathName);
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
        comicId: comicSeriesID,
        }
        });
      
      });

      //Filter each series
      let harbourComicFiltered = comicData.filter((dataObj)=>{
        return dataObj.comicId === 0;
      })

      let oneShotsFiltered = comicData.filter((dataObj)=>{
        return dataObj.comicId === 1;
      })

      let fireStarterFiltered = comicData.filter((dataObj)=> {
        return dataObj.comicId === 2;
      })

      createPage({
        path: `heroine-rises/chapters`,
        component:path.resolve(`./src/templates/comic-overview.js`),
        context:{
          comicData: harbourComicFiltered,
          comicId:0,
          comicTitle:"Heroine Rises"
        }
      })
      createPage({
        path:'one-shots/chapters',
        component:path.resolve(`./src/templates/comic-overview.js`),
        context:{
          comicData:oneShotsFiltered,
          comicId:1,
          comicTitle:"One Shots"
        }
      })
      createPage({
        path:'firestarter/chapters',
        component:path.resolve(`./src/templates/comic-overview.js`),
        context:{
          comicData:fireStarterFiltered,
          comicId:2,
          comicTitle:"FireStarter"
        }
      })

      const galleryTemplate = path.resolve(`src/templates/gallery-item.js`);
      const galleryGroupTemplate = path.resolve(`src/templates/gallery-group.js`);
      const galleryItems = await graphql(`
      {
        allContentfulGalleryItem {
          nodes {
            creationDate
            description{
              description
            }
            title
            id
            medium
            image {
              gatsbyImage(fit: COVER, width: 1000)
            }
          }
        }
      }
      `).then(result => {
        const galleryData = result.data.allContentfulGalleryItem.nodes;
        galleryData.forEach(entry => {
          console.log('gallery/' + convertToSlug(entry.title));
          createPage({
            path:'gallery/' + convertToSlug(entry.title),
            component: galleryTemplate,
            context:{
              title: entry.title,
              creationDate: entry.creationDate,
              description: entry.description,
              medium: entry.medium,
              image: entry.image,
              slug: convertToSlug(entry.title)
            }
          })
        })

      })


      //Create galleryGroup Pages
      
      const galleryGroups = await graphql(`
      {
        allContentfulGalleryCollectionItem {
          nodes {
            desc
            title
            subtitle
            imageCollectionData {
              description {
                description
              }
              medium
              title
              image {
                gatsbyImage(fit: COVER, width: 1000)
              }
            }
            coverImage {
              gatsbyImage(fit: COVER, width: 1000)
            }
          }
        }
      }
      `).then(result => {
        const galleryData = result.data.allContentfulGalleryCollectionItem.nodes;
        galleryData.forEach((entry,i) => {
          console.log('gallery/' + convertToSlug(entry.title));

          // let previous = ;
          // Check if previous and next exist in Array
          // If they do, load the titless, and convvert to slug
          // Place them into previous/next object

          // let next = ;

          createPage({
            path:'gallery/' + convertToSlug(entry.title),
            component: galleryGroupTemplate,
            context:{
              title: entry.title,
              desc: entry.desc,
              subtitle: entry.subtitle,
              imageCollectionData: entry.imageCollectionData,
              coverImage: entry.coverImage,
              slug: convertToSlug(entry.title),
              // otherIllustrations: {previous, next},
            }
          })
        })

      })

//   const infoTemplate = path.resolve(`src/templates/info-page.js`)
//   const result = graphql(`
//     {
//       allMarkdownRemark(
//         filter: {frontmatter: {path: {ne:null}}}
//         sort: { order: ASC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     console.log(result);
//     if (result.errors) {
//       reporter.panicOnBuild(`Error while running GraphQL query.`)
//       return
//     }
//     result.data.allMarkdownRemark.edges.forEach(({ node },i) => {
//       console.log(node.frontmatter.path, i);
//       createPage({
//         path: node.frontmatter.path,
//         component: infoTemplate,
//         context: {
//           stats: charSettData[i].stats,
//           physical: charSettData[i].physical,
//         }, // additional data can be passed via context
//       })
//     })
//   })

      return graphql(
        `
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
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

      return graphql(
        `
        {
          allContentfulGalleryCollectionItem {
            nodes {
              desc
                title
                subtitle
              imageCollection {
                gatsbyImage(fit: COVER, width: 500)
              }
              coverImage {
                gatsbyImage(fit: COVER, width: 1000)
              }
            }
          }
        }`).then()
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
