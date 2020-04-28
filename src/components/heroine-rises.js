import React, {Component} from 'react'
import comicData from '../data/comicData';
import ChapterPreview from './chapterPreview';
class HeroineRises extends Component{

  render(){
    let comicInfo = this.props.comicInfo.comicData;
    let comicMeta = comicData[this.props.comicInfo.comicId];



    let latestChapter = comicInfo[comicInfo.length-1];

    return(
      <div className="container">
      <div className="heroine-rises">
      <div className="comic-overview">
        <h2 className="comic-title" style={{fontFamily:'Lobster,cursive', fontSize:'2.5em',margin:'.5em',fontWeight:'normal'}}><i>{comicMeta.title}</i></h2>
        <div className="comic-info">
            <div className="comic-synopsis">
            {comicMeta.synopsis}
                </div>
            <img src={comicMeta.coverImage} alt={`${comicMeta.title}`} className="comic-cover"/>
        </div>
      </div>

      <div className="current-chapter">
        <h5>Latest Chapter:</h5>
        <ChapterPreview key={"latest"} link={`${comicMeta.url}/${latestChapter.chapter}/0`} chapter={latestChapter}/>
      </div>

      <div className="chapter-list-div">
      <h5>Chapters</h5>
          {
            comicInfo.map((chapter)=>{
              return (
                  <ChapterPreview key={chapter.chapter} link={`${comicMeta.url}/${chapter.chapter}/0`} chapter={chapter}/>
              )
            })
          }
      </div>
  </div>
      </div>
    )
  }
}


export default HeroineRises