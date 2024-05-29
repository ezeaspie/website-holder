import * as React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

import MaxineImage from '../images/site/Maxine0.jpg'
import DamienImage from '../images/site/firestarter/damienPortrait.jpg'
import DrillImage from '../images/site/firestarter/drillPortrait.jpg'

import Kindling from '../images/site/firestarter/chapter tiles/chapter1.jpg'
import Snuffed from '../images/site/firestarter/chapter tiles/chapter2.jpg'
import Embers from '../images/site/firestarter/chapter tiles/chapter3.jpg'
import Burns from '../images/site/firestarter/chapter tiles/chapter4.jpg'
import Flames from '../images/site/firestarter/chapter tiles/chapter5.jpg'
import Inferno from '../images/site/firestarter/chapter tiles/chapter6.jpg'
import Cinders from '../images/site/firestarter/chapter tiles/chapter7.jpg'

import FireStarterLogo from '../images/site/firestarter/svg/fsMainLogoRed.svg';
import FireStarterLogoWhite from '../images/site/firestarter/svg/fsMainLogoWhite.svg';
import MaxineFooterImage from '../images/site/firestarter/footer-hero.jpg';



class ChapterTile {
  constructor(title, image, isAvaliable, link=null){
    this.title = title;
    this.image = image;
    this.isAvaliable = isAvaliable;
    this.link = link;
  }
  createTile(id=0){
    let className = "fs-chapter";
    let chapterNumber = id + 1;
    if(!this.isAvaliable){
      className="fs-chapter unavaliable"
    }
    return (
      <div className={className} key={id}>
        {this.isAvaliable?<Link className="tile-link" to={this.link}></Link>:null}
        <img src={this.image} alt={this.title + " Chapter Preview Image"}></img>
        <h3>
          {chapterNumber + ". " + this.title}
        </h3>
      </div>
    )
  }
}

class CharacterTile {
  constructor(title, image, description){
    this.title = title;
    this.image =  image;
    this.description = description;
  }
  createCharacterTile(i=0){
    return(
      <div className="fs-character" key={i}>
        <div className="fs-img-container">
          <img src={this.image} alt={this.title + " character portrait"}></img>
        </div>
        <div className="fs-character-info">
          <h3>{this.title}</h3>
          <p className="fs-character-description">{this.description}</p>
        </div>
      </div>
    )
  }
}

const chapterTiles = [
  new ChapterTile("Kindling",Kindling,true,"/firestarter/0"),
  new ChapterTile("Snuffed",Snuffed,true,"/firestarter/1"),
  new ChapterTile("Embers",Embers,true,"/firestarter/2"),
  new ChapterTile("Burns",Burns,false,"/firestarter/3"),
  new ChapterTile("Flames",Flames,false,"/firestarter/4"),
  new ChapterTile("Inferno",Inferno,false,"/firestarter/5"),
  new ChapterTile("Cinders",Cinders,false,"/firestarter/6"),
];

const characterTiles = [
  new CharacterTile("Maxine Rubin",MaxineImage,"Maxine Amelia Rubin is a police officer who is seeking revenge on the man who killed her mother when she was a child. Maxine joined the NSPD to have the best chance at achieving her goal, tossing aside anything that might be a distraction. Maxine's lack of friends, hobbies, or ambitions outside the NSPD don't bother her since it allows for more training time for her ultimate showdown."),
  new CharacterTile("Damien Schmidt",DamienImage,"Damien Schmidt is the officer partner to Maxine. The only member of the department willing to work under Maxine, Damien does so with the vain hope that one day Maxine will reciprocate his feelings for her. What started off as a childish crush slowly has evolved into a strong partner relationship and Damien worries that Maxine is too reckless and focused on her avenging quest."),
  new CharacterTile("Drill",DrillImage,"Drill is the known name of a notorious serial killer within the city of Northern Serenity. A spotty backstory as a tradesman become firefighter, something buried in the past caused him to snap and tally his first gruesome murder - a rising District Attorney named Veronica Rubin. Since then, Drill's strength and intelligence allowed him to take the lives of 18 others with no end in sight."),

];
console.log(chapterTiles);

const FireStarter = () => {
  const raw = useStaticQuery(graphql`
  query{
      allContentfulFireStarterBannerImageContent {
        nodes {
          smallImages {
            gatsbyImage(fit: COVER, width: 500)
          }
          largeImages {
            gatsbyImage(fit: COVER, width: 1920)
          }
        }
      }
    }
  `);
  const bannerInfo = raw.allContentfulFireStarterBannerImageContent.nodes[0];

  const createArtDirection = (largeImages, smallImages) => {
    let imageCollection = largeImages.map((image, i)=>{
      let imageObj = {largeImage: image, smallImage: smallImages[i]};

      const artDirection = withArtDirection(getImage(imageObj.largeImage), [
        {
          media: "(max-width: 650px)",
          image: getImage(imageObj.smallImage),
        },
      ])
      return artDirection
    })


    return imageCollection
  }
  
  


const images = createArtDirection(bannerInfo.largeImages, bannerInfo.smallImages);
const selectedImage = images[Math.floor(Math.random()*images.length)];
console.log(selectedImage);

console.log(images);
  return (
      <Layout>
          <div>
            <section className="hero-banner">
            <GatsbyImage className="banner-image" image={selectedImage}/>
              <div className="hero-banner-info">
                <img className="fs-logo" src={FireStarterLogo} alt="FireStarter Logo Red"></img>
                  <p className="hero-banner-text">A fiery officer's quest for revenge.</p>
                <button className="hero-banner-btn">
                  <Link to="/firestarter/0">
                    Read Now
                    <i class="fs-icon fa fa-angle-double-right"></i>
                  </Link>
                </button>
              </div>
            </section>
            <section className="fs-intro introduction wrapper-90">
              <h1>FireStarter</h1>
              <p className="fs-description">
              When a serial killer executes the mother of young Maxine Rubin, the girl goes through life wanting nothing more than to bite back at the hand that took away her best friend. Now, as an officer of the Northern Serenity Police Department, Maxine is eager to challenge anyone who would dare try to stand in the way of justice and the greater good, be it gang members or corrupt cops within the organization. When the killer emerges again, Maxine is willing to do whatever it takes to bring him down. If that means being the spark that lights the fires of war between the police and the gangs, so be it.
              </p>
              <ul className="fs-tags tags">
                <li className="fs-tag">Action</li>
                <li className="fs-tag">Drama</li>
                <li className="fs-tag">Noir</li>
                <li className="fs-tag">Thriller</li>
              </ul>

            </section>
            <section className="fs-characters wrapper-100">
            <h2 className="wrapper-90">Characters</h2>
              <div className="fs-character-list wrapper-90">
                {characterTiles.map((character, i) =>{
                  return character.createCharacterTile(i);
                })}
              </div>
            </section>

            <section className="fs-chapters wrapper-90">
              <h2>Choose a Chapter</h2>
              <div className="fs-chapter-list">
                {chapterTiles.map((tile, i) =>{
                  return tile.createTile(i);
                })}
              </div>
            </section>
            <section className="fs-footer">
              <img className="fs-footer-main-img" src={MaxineFooterImage} alt="FireStarter Maxine holding a baton with a cape of fire"/>
                <div className="fs-footer-content">
                  <img className="fs-footer-logo" src={FireStarterLogoWhite} alt="FireStarter Logo White"></img>
                  <a className="fs-footer-link v-border" href="#">Link1</a>
                  <a className="fs-footer-link" href="#">Link2</a>
                </div>  
            </section>
          </div>
      </Layout>
  )
}

export default FireStarter

export const Head = () => (
  <>
  <title>FireStarter - Ezequiel Espinoza Diaz</title>
  <link rel="stylesheet" href="https://use.typekit.net/tck2lyo.css"></link>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  </>
)
