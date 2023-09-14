import React, {Component} from 'react';
import { Link, withPrefix } from 'gatsby';
import comicData from '../data/comicData';
import PullOutMenu from './pullOutMenu';
import Instagram from '../images/site/instagram.png';

class Reader extends Component {
    constructor(props){
        super(props);
        this.state = {
            isComicDropdown:false,
            isChapterDropdown:false,
            isPageDropdown:false,
            isFinalPage: false,
            hasNextChapter:true,
            hasPrevChapter:true,
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
        if(currentChapter === 0){
            this.setState({hasPrevChapter:false});
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
                <img alt={altText} src={withPrefix(source)} style={{width:'100%'}}/>
            ); 
         }

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
                    <a className="cycle-btn" href={`/${comicName}/${chapterInfo.chapterId+1}/${0}`}>{"Next >"}</a>
                );
            }
            else{
                return (
                    null
                )
            }
         }

         const checkForPrevChapter = () => {
            if (this.state.hasPrevChapter){
                return (
                    <a className="cycle-btn" href={`/${comicName}/${chapterInfo.chapterId-1}/${0}`}>{"< Prev"}</a>
                );
            }
            else{
                return (
                    null
                )
            }
         }

        return (
            <div className="reader">

                <PullOutMenu isClosed={this.state.togglePullOutMenu} chapterArray = {chapterInfo.comicData} comicName={comicName}/>
                <div className="reader-title-div">
                    <div className='reader-header-info'>
                            <h1 className='reader-comic-title'>{chapterInfo.comicName + " Chapter " + currentChapter}</h1>
                        <div className="chapter-dropdown">
                            <div
                            className='chapter-dropdown-button'
                            onFocus={()=>{this.setState({isChapterDropdown: true})}}
                            onBlur={()=>{this.setState({isChapterDropdown:false})}}
                            onClick={()=>{this.setState({isChapterDropdown:!this.state.isChapterDropdown})}}>
                                <h2 className='reader-chapter-title'>{chapterInfo.chapterTitle}</h2>
                                <span>V</span>
                            </div>
                            
                            <ul 
                            className={this.state.isChapterDropdown?"list-open collapse-list":"list-closed collapse-list"}
                            >
                            {
                                chapterInfo.comicData.map((chapter,i)=>{
                                    return (
                                    <li 
                                    
                                    key ={`chapter${chapter.chapter}`}
                                    className={this.state.isChapterDropdown?"list-open":"list-closed"}
                                    >
                                    <Link 
                                    key={`chapter${i}`}
                                    to={`/${comicName}/${chapter.chapter}`}>
                                    <h5>{`${chapter.chapter+1}. ${chapter.title}`}</h5>
                                    </Link>
                                    </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className='reader-header-buttons'>
                        {checkForPrevChapter()}
                        {checkForNextChapter()}
                    </div>
                </div>

                <div className="reader-image">
                
                        <ul className="reader-image-list">
                            {
                              imageCollection.map((image)=>{
                                  return image;
                              })  
                            }
                        </ul>
                    
                </div>
                    <a 
                    className="modern-reader-next"
                    href={this.state.hasNextChapter?`/${comicName}/${chapterInfo.chapterId+1}`:`/${comicName}-chapters/`}>
                        {this.state.hasNextChapter?'Next >':`${chapterInfo.comicName} Overview`}
                    </a>
                
                    <a className="btn ig-btn" href="https://www.instagram.com/ezeas123/" target='_blank'><img src={Instagram}></img></a>
                <button className={this.state.togglePullOutMenu?'togglePullOut':'togglePullOut open-menu'} onClick={()=>{this.setState({togglePullOutMenu: !this.state.togglePullOutMenu})}}>{'<'}</button>
            </div>
        )
    }
}

export default Reader;