import React, {Component} from 'react';
import { Link, withPrefix } from 'gatsby';
import Instagram from '../images/site/instagram.png';
import comicData from '../data/comicData';

class Reader extends Component {
    constructor(props){
        super(props);
        this.state = {
            isComicDropdown:false,
            isChapterDropdown:false,
            isPageDropdown:false,
            isFinalPage: false,
            hasNextChapter:true,
        }
    }

    componentDidMount(){
        let chapterInfo = this.props.chapterInfo;

        if(chapterInfo.currentPage + 1 >= chapterInfo.chapterPages){
            this.setState({isFinalPage:true},()=>{
                let latestChapter = chapterInfo.comicData[0].chapter;
                let currentChapter = chapterInfo.chapterId;
                if(latestChapter === currentChapter){
                    this.setState({hasNextChapter:false});
                }
            });
        }
    }

    render(){

        let chapterInfo = this.props.chapterInfo;

        let comicName = comicData[chapterInfo.comicId].url;

        let imageSource = `/comics/${chapterInfo.comicId}/${chapterInfo.chapterId}/${chapterInfo.currentPage}.jpg`;

        let link = `/${comicName}/${chapterInfo.chapterId}/${chapterInfo.currentPage+1}`;

        if(this.state.isFinalPage){
            if(!this.state.hasNextChapter){
                link = `/${comicName}/`;
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
                onMouseOut={()=>{this.setState({isPageDropdown:false})}}
            >
            <h5>{i+1}</h5>
            </li>
            </Link>); 
         }

        return (
            <div className="reader">
                <div className="reader-title-div">
                    <div className="chapter-list-div">
                        <h5 
                        onMouseOver={()=>{this.setState({isChapterDropdown: true})}}
                        onMouseOut={()=>{this.setState({isChapterDropdown:false})}}
                        onClick={()=>{this.setState({isChapterDropdown:!this.state.isChapterDropdown})}}
                        className="reader-chapter-title">{chapterInfo.chapterId+1}. {chapterInfo.chapterTitle}</h5>
                        <ul className={this.state.isChapterDropdown?"list-open collapse-list":"list-closed collapse-list"}>
                        {
                            chapterInfo.comicData.map((chapter,i)=>{
                                return (
                                <Link 
                                key={`chapter${i}`}
                                to={`/${comicName}/${chapter.chapter}/0`}>

                                <li 
                                onMouseOver={()=>{this.setState({isChapterDropdown: true})}}
                                onMouseOut={()=>{this.setState({isChapterDropdown:false})}}
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
                    
                    <div className="reader-list-div">
                        <h5 
                        className="reader-page-number"
                        onMouseOver={()=>{this.setState({isPageDropdown: true})}}
                        onMouseOut={()=>{this.setState({isPageDropdown:false})}}
                        onClick={()=>{this.setState({isPageDropdown:!this.state.isPageDropdown})}}
                        >{chapterInfo.currentPage+1}</h5>
                        <ul className={this.state.isPageDropdown?"list-open collapse-list":"list-closed collapse-list"}>
                            {
                                pageLinks.map((page)=>{
                                    return page;
                                })
                            }
                        </ul>
                    </div>
                    <h5 className="reader-comic-title">{chapterInfo.comicName}</h5>
                </div>
                <div className="reader-image">
                    <Link to={link}>
                        <img alt={`${chapterInfo.comicName} Chapter ${chapterInfo.chapterId+1} Page ${chapterInfo.currentPage+1}`} src={withPrefix(imageSource)} style={{width:'100%', maxWidth:'920px'}}/>
                    </Link>
                </div>
                <h5 style={{textAlign:"center"}}>Page {chapterInfo.currentPage+1}</h5>
                <ul className="support-links">
                    <li><a href="https://www.instagram.com/ezequiel_espinoza_art/"><img src={Instagram} alt="instagram-logo"></img>Follow Me on Instagram!</a></li>
                </ul>
            </div>
        )
    }
}

export default Reader;