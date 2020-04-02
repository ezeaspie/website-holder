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
                description:"Follow Madeline Harbour in her quest to change her corrupt and dangerous city of Northern Serenity!",
                image:HeroineRisesPreview,
                link:"/heroine-rises-hub",
            },
            {
                title:"GALLERY",
                description:"View all of my artistic creations - ranging from early pencil sketches to maps and concept art for characters and settings!",
                image:GalleryPreview,
                link:`/Gallery`,
            },
            {
                title:`HEROINE RISES CHAPTER ${latestChapterId}`,
                description:"Read the latest pages of my Heroine Rises series!",
                image:withPrefix(`/comics/0/${latestChapterId-1}/1.jpg`),
                link:`/heroine-rises/${latestChapterId-1}/0`,
            },
            {
                title:"BLOG",
                description:"Read commentaries, tutorials, and any other musings I may have about art!",
                image:BlogPreview,
                link:`/blog`,
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
                description:"Follow Madeline Harbour in her quest to change her corrupt and dangerous city of Northern Serenity!",
                image:HeroineRisesPreview,
                link:"/heroine-rises-hub",
            },
            {
                title:"GALLERY",
                description:"View all of my artistic creations - ranging from early pencil sketches to maps and concept art for characters and settings!",
                image:GalleryPreview,
                link:`/Gallery`,
            },
            {
                title:`HEROINE RISES CHAPTER ${latestChapterId}`,
                description:"Read the latest pages of my Heroine Rises series!",
                image:withPrefix(`/comics/0/${latestChapterId-1}/1.jpg`),
                link:`/heroine-rises/${latestChapterId-1}/0`,
            },
            {
                title:"BLOG",
                description:"Read commentaries, tutorials, and any other musings I may have about art!",
                image:BlogPreview,
                link:`/blog`,
            }
        ]

        console.log(bannerInfo);

          return (
            <Carousel data={bannerInfo}/>
          );
    }
}

export default Banner;