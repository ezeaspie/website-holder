import React, {Component} from 'react';
import { Link, withPrefix } from 'gatsby';
import comicData from '../data/comicData';
import PullOutMenu from './pullOutMenu';

class Reader extends Component {
    constructor(props){
        super(props);
        this.state = {
            isComicDropdown:false,
            isChapterDropdown:false,
            isPageDropdown:false,
            isFinalPage: false,
            hasNextChapter:true,
            classicView:false,
            togglePullOutMenu: true,
        }
    }

    componentDidMount(){
        let chapterInfo = this.props.chapterInfo;

        let latestChapter = chapterInfo.comicData[0].chapter;
        let currentChapter = chapterInfo.chapterId;
        if(latestChapter === currentChapter){
            this.setState({hasNextChapter:false});
        }

        if(chapterInfo.currentPage + 1 >= chapterInfo.chapterPages){
            this.setState({isFinalPage:true});
        }
    }

    render(){
        let chapterInfo = this.props.chapterInfo;

        let comicName = comicData[chapterInfo.comicId].url;

        let imageSource = `/comics/${chapterInfo.comicId}/${chapterInfo.chapterId}/${chapterInfo.currentPage}.jpg`;

        let imageCollection = [];
        
        for(let i = 0 ; i<chapterInfo.chapterPages; i++){
            let altText = `${chapterInfo.comicName} Chapter ${chapterInfo.chapterId+1} Page ${i+1}`
            if(chapterInfo.currentPage === 0){
                altText = `${chapterInfo.comicName} Chapter ${chapterInfo.chapterId+1} Cover`
            }
            let source = `/comics/${chapterInfo.comicId}/${chapterInfo.chapterId}/${i}.jpg`;

            imageCollection.push(
                <img alt={altText} src={withPrefix(source)} style={{width:'100%', maxWidth:'920px'}}/>
            ); 
         }

         console.log(imageCollection);

        let link = `/${comicName}/${chapterInfo.chapterId}/${chapterInfo.currentPage+1}`;


        let imgAlt = `${chapterInfo.comicName} Chapter ${chapterInfo.chapterId+1} Page ${chapterInfo.currentPage+1}`

        if(chapterInfo.currentPage === 0){
            imgAlt = `${chapterInfo.comicName} Chapter ${chapterInfo.chapterId+1} Cover`
        }


        if(this.state.isFinalPage){
            if(!this.state.hasNextChapter){
                link = `/${comicName}-chapters/`;
            }
            else{
                link = `/${comicName}/${chapterInfo.chapterId+1}/${0}`
            }
        }
        let pageLinks = [];

        for(let i = 0 ; i<chapterInfo.chapterPages; i++){
            pageLinks.push(
            <Link 
            key={`page${i}`}
            to={`/${comicName}/${chapterInfo.chapterId}/${i}`}>
            <li 
                className={this.state.isPageDropdown?"list-open":"list-closed"}
                onMouseOver={()=>{this.setState({isPageDropdown: true})}}
                onFocus={()=>{this.setState({isPageDropdown: true})}}
                onMouseOut={()=>{this.setState({isPageDropdown:false})}}
                onBlur={()=>{this.setState({isPageDropdown:false})}}
            >
            <h5>{i+1}</h5>
            </li>
            </Link>); 
         }
         
         let currentChapter = chapterInfo.chapterId+1;

         const checkForNextChapter = () => {
            if (this.state.hasNextChapter){
                return (
                    <button>{"Next >"}</button>
                );
            }
            else{
                return (
                    <button disabled="true">{"Next >"}</button>
                )
            }
         }

        return (
            <div className="reader">

                <PullOutMenu isClosed={this.state.togglePullOutMenu} chapterArray = {chapterInfo.comicData} comicName={comicName}/>
                <div className="reader-title-div">
                    <div className='reader-header-info'>
                        <h1>
                            <span className='reader-comic-title'>{chapterInfo.comicName + " " + currentChapter}</span>
                            <span className='reader-chapter-title'>{chapterInfo.chapterTitle}</span>
                        </h1>
                        <div className="chapter-list-div">
                            <h2 
                            onMouseOver={()=>{this.setState({isChapterDropdown: true})}}
                            onFocus={()=>{this.setState({isChapterDropdown: true})}}
                            onMouseOut={()=>{this.setState({isChapterDropdown:false})}}
                            onBlur={()=>{this.setState({isChapterDropdown:false})}}
                            onClick={()=>{this.setState({isChapterDropdown:!this.state.isChapterDropdown})}}
                            className="reader-chapter-title">
                                v
                            </h2>
                            
                            <ul className={this.state.isChapterDropdown?"list-open collapse-list":"list-closed collapse-list"}>
                            {
                                chapterInfo.comicData.map((chapter,i)=>{
                                    return (
                                    <Link 
                                    key={`chapter${i}`}
                                    to={`/${comicName}/${chapter.chapter}/0`}>

                                    <li 
                                    onMouseOver={()=>{this.setState({isChapterDropdown: true})}}
                                    onFocus={()=>{this.setState({isChapterDropdown: true})}}
                                    onMouseOut={()=>{this.setState({isChapterDropdown:false})}}
                                    onBlur={()=>{this.setState({isChapterDropdown:false})}}
                                    key ={`chapter${chapter.chapter}`}
                                    className={this.state.isChapterDropdown?"list-open":"list-closed"}
                                    >
                                    <h5>{`${chapter.chapter+1}. ${chapter.title}`}</h5>
                                    </li>
                                    </Link>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className='reader-header-buttons'>
                        {checkForNextChapter()}
                        <button  className='btn btn-call-to-action'>{"Next >"}</button>
                    </div>
                </div>

                <div className="reader-image">
                    {
                        this.state.classicView?
                        <Link to={link}>
                            <img alt={imgAlt} src={withPrefix(imageSource)} style={{width:'100%', maxWidth:'920px'}}/>
                        </Link>:
                        <ul className="reader-image-list">
                            {
                              imageCollection.map((image)=>{
                                  return image;
                              })  
                            }
                        </ul>
                    }
                    
                </div>
                {
                    this.state.classicView?
                    <h5 style={{textAlign:"center"}}>Page {chapterInfo.currentPage+1}</h5>
                    :
                    <a 
                    className="modern-reader-next"
                    href={this.state.hasNextChapter?`/${comicName}/${chapterInfo.chapterId+1}/${0}`:`/${comicName}-chapters/`}>
                        <h5 style={{textAlign:'center'}}>
                            {this.state.hasNextChapter?'Next Chapter':`${chapterInfo.comicName} Overview`}
                            </h5></a>
                }
                
                <ul className="support-links">
                    <li><button className="reader-toggle btn" onClick={()=>{this.setState({classicView:!this.state.classicView})}}>Change View</button></li>
                    <li><a className="btn" href="https://www.instagram.com/ezeas123/">Follow Me on Instagram!</a></li>
                </ul>
                <button className={this.state.togglePullOutMenu?'togglePullOut':'togglePullOut open-menu'} onClick={()=>{this.setState({togglePullOutMenu: !this.state.togglePullOutMenu})}}>{'<'}</button>
            </div>
        )
    }
}

export default Reader;