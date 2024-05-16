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
      <div className='black-wrapper-100'>
      <div className="chapter-preview-list">
      <h1>List of {comicMeta.title} Chapters</h1>
          {
            comicInfo.map((chapter)=>{
              return (
                  <ChapterPreview
                  color={comicMeta.color}
                  title={comicMeta.title}
                  key={chapter.chapter}
                  link={`${comicMeta.url}/${chapter.chapter}`}
                  chapter={chapter}/>
              )
            })
          }
      </div>
      </div>

    )
  }
}

export default ChapterList