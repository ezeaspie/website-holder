import React, {Component} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import comicData from '../data/comicData';

const colorClassList = ['orange','pink','red','yellow','blue'];


class Comics extends Component {
  render(){
    const colorClassList = ['orange','pink','red','yellow','blue'];
    let colorClass = colorClassList[0];
    console.log(comicData);
        return(
      <Layout>
          
        <SEO title="Comics" />
        <div className="container">
        <div className="comic-list">
          {comicData.map((comic, i)=>{
                if(comic.title === "Heroine Rises"){
                  colorClass = colorClassList[0];
                }
                if(comic.title === "FireStarter"){
                  colorClass = colorClassList[2];
                }
                if(comic.title === "One Shots"){
                  colorClass=colorClassList[1];
                }
              return (
                <div className="comic-preview blog-preview" key={i}>
                  <Link to={'/' + comic.secondUrl} key={i}>
                  <div 
                  className="comic-preview-image"
                  style={{backgroundImage: `url(${comic.coverImage})`}}>
                  </div>       
                  <div className="blog-preview-content comic-preview-content">
                    <h5 className={'comic-preview-title ' + colorClass + '-banner'}>{comic.title}</h5>
                    <p>{comic.excerpt}</p>
                  </div> 
                  </Link>           
                </div>
              )
          })}
        </div>
        </div>
    </Layout>
    )
  }
}
export default Comics;