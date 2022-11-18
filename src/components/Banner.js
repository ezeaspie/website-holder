import React, {Component} from 'react';
import { withPrefix} from "gatsby";
import comicData from '../data/comicData.json';
import Carousel from './carousel';
import GalleryPreview from '../images/site/WebBanner.jpg';
import BlogPreview from '../images/site/blogCover.jpg';
import HeroineRisesPreview from '../images/site/HRBanner.jpg';

class Banner extends Component {

    constructor(props){
        super(props);
        this.state = {
            bannerState:0,
            maxBannerState:3,
            title:null,
            description:null,
            image:null,
            link:`/Gallery`,
            isInTransition:false,
        }
    }

    componentDidMount(){
        this.getBannerStateVariables();
        
    }

    getCurrentHeroineRisesChapter = () => {
        let comics = comicData.filter(comicObject=>comicObject.comicId===0);
        return comics.length;
    }

    getBannerStateVariables(){
        let latestChapterId = this.getCurrentHeroineRisesChapter();
        let bannerInfo = [
            {
                title:"HEROINE RISES",
                description:"A woman's dream of ",
                image:HeroineRisesPreview,
                link:"/heroine-rises",
                color: "orange",
                keyWord: "heroism",
            },
            {
                title:"GALLERY",
                description:"A collection of ",
                image:GalleryPreview,
                link:`/Gallery`,
                color: "pink",
                keyWord:"illustrations",
            },
            {
                title:`HEROINE RISES ${latestChapterId}`,
                description:"Read the latest ",
                image:withPrefix(`/comics/0/${latestChapterId-1}/1.jpg`),
                link:`/heroine-rises/${latestChapterId-1}/0`,
                color: "yellow",
                keyWord:"pages"
            },
            {
                title:"BLOG",
                description:"Get up to ",
                image:BlogPreview,
                link:`/blog`,
                color: "blue",
                keyWord: "date"
            }
        ]
        let selectedObject = bannerInfo[this.state.bannerState];
        this.setState({title:selectedObject.title,description:selectedObject.description,image:selectedObject.image,link:selectedObject.link});
    }

    

    handleBannerUpdateRequest(upOrDown){
        this.setState({isInTransition:true},()=>{
            setTimeout(()=>{this.setState({isInTransition:false})},2100);

            setTimeout(()=>{
                if(upOrDown){
                    if(this.state.bannerState +1 >= this.state.maxBannerState){
                        this.setState({bannerState:0},this.getBannerStateVariables);
                    }
                    else{
                        this.setState({bannerState:this.state.bannerState+1},this.getBannerStateVariables);
                    }
                }
                else{
                    if(this.state.bannerState -1 < 0){
                        this.setState({bannerState:this.state.maxBannerState-1},this.getBannerStateVariables);
                    }
                    else{
                        this.setState({bannerState:this.state.bannerState-1},this.getBannerStateVariables);
                    }
                }
            },1000);
        });
    }

    render(){
        let latestChapterId = this.getCurrentHeroineRisesChapter();
        let bannerInfo = [
            {
                title:"HEROINE RISES",
                description:"A woman's dream of ",
                image:HeroineRisesPreview,
                link:"/heroine-rises",
                color: "orange",
                keyWord: "heroism",
            },
            {
                title:"GALLERY",
                description:"A collection of ",
                image:GalleryPreview,
                link:`/Gallery`,
                color: "pink",
                keyWord:"illustrations",
            },
            {
                title:`HEROINE RISES ${latestChapterId}`,
                description:"Read the latest ",
                image:withPrefix(`/comics/0/${latestChapterId-1}/1.jpg`),
                link:`/heroine-rises/${latestChapterId-1}/0`,
                color: "yellow",
                keyWord:"pages"
            },
            {
                title:"BLOG",
                description:"Get up to ",
                image:BlogPreview,
                link:`/blog`,
                color: "blue",
                keyWord: "date"
            }
        ]

        console.log(bannerInfo);

          return (
            <Carousel data={bannerInfo}/>
          );
    }
}

export default Banner;