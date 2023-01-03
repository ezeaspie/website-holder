import React, {Component} from 'react'
import comicData from '../data/comicData';
import ChapterPreview from './chapterPreview';
class ChapterList extends Component{

  render(){
    let comicInfo = this.props.comicInfo.comicData.reverse();
    let comicMeta = comicData[this.props.comicInfo.comicId];

    let latestChapter = comicInfo[comicInfo.length-1];

    const readerUrls = [
      'heroine-rises',
      'one-shots',
      'firestarter',
    ];
    return(
      <div className="cl-container">
        <div className='comic-overview-container'>
      <div className="comic-overview blog-preview">
        <div 
        className="blog-preview-image"
        style={{backgroundImage: `url(${comicMeta.coverImage})`}}>
        </div>    
        <div className="blog-preview-content">
          <h2 className='comic-overview-title'>{comicMeta.title}</h2>
          <div className={comicMeta.color + "-banner comic-overview-banner"}></div>
          <p>
            {comicMeta.synopsis}
          </p>
        </div>
      </div>
      </div>
      <div className="heroine-rises">

      <div className="chapter-list-div container">
      <h2>{comicMeta.title} Chapters</h2>
          {
            comicInfo.map((chapter)=>{
              return (
                  <ChapterPreview
                  color={comicMeta.color}
                  title={comicMeta.title}
                  key={chapter.chapter}
                  link={`${comicMeta.url}/${chapter.chapter}/0`}
                  chapter={chapter}/>
              )
            })
          }
      </div>
  </div>
      </div>
    )
  }
}

export default ChapterList