import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import HeroImage1 from '../images/site/firestarter/heroImage1.jpg'
import HeroImage2 from '../images/site/firestarter/heroimage2.jpg'
import HeroImage3 from '../images/site/firestarter/heroimage3.jpg'
import HeroImage4 from '../images/site/firestarter/heroimage4.jpg'
import MaxineImage from '../images/site/Maxine0.jpg'
import DamienImage from '../images/site/firestarter/damien.png'

import Kindling from '../images/site/firestarter/1.jpg'
import Snuffed from '../images/site/firestarter/2.jpg'
import Embers from '../images/site/firestarter/3.jpg'
import Burns from '../images/site/firestarter/4.png'
import Flames from '../images/site/firestarter/5.jpg'
import Inferno from '../images/site/firestarter/6.jpg'
import Cinders from '../images/site/firestarter/7.jpg'

import FireStarterLogo from '../images/site/firestarter/fsLogo1.png'


const heroImages = [HeroImage1,HeroImage2,HeroImage3,HeroImage4];

class ChapterTile {
  constructor(title, image, isAvaliable, link=null){
    this.title = title;
    this.image = image;
    this.isAvaliable = isAvaliable;
    this.link = link;
  }
  createTile(id=0){
    let className = "tile chapter-tile";
    let chapterNumber = id + 1;
    if(!this.isAvaliable){
      className="tile chapter-tile unavaliable"
    }
    return (
      <div className={className} key={id}>
        {this.isAvaliable?<Link className="tile-link" to={this.link}></Link>:null}
        <img src={this.image}></img>
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
      <div className="long-tile" key={i}>
        <img src={this.image}></img>
        <div className="long-tile-info">
          <h3>{this.title}</h3>
          <div className="long-tile-description">{this.description}</div>
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
  new CharacterTile("Drill",Burns,"Drill is the known name of a notorious serial killer within the city of Northern Serenity. A spotty backstory as a tradesman become firefighter, something buried in the past caused him to snap and tally his first gruesome murder - a rising District Attorney named Veronica Rubin. Since then, Drill's strength and intelligence allowed him to take the lives of 18 others with no end in sight."),

];
console.log(chapterTiles);

const selectedImage = heroImages[Math.floor(Math.random()*heroImages.length)];

const FireStarter = () => {
  return (
      <Layout>
          <div>
            <section className="hero-banner">
              <div className="hero-banner-info">
                <img className="fs-logo" src={FireStarterLogo}></img>
                <div className="hero-banner-flavor-text">
                  <p className="hero-banner-block-text" id="mobile-flavor-text">A fiery officer's quest for revenge.</p>
                  <p className="hero-banner-block-text">A Fiery Officer</p>
                  <p className="hero-banner-block-text">A Charming Sidekick</p>
                  <p className="hero-banner-block-text">A Corrupt PD</p>
                  <p className="hero-banner-block-text">A Serial Killer</p>
                  <p className="hero-banner-block-text">A Star Attorney</p>
                  <p className="hero-banner-block-text">A Desperate Mother</p>
                  <p className="hero-banner-block-text">A Daughter Caught</p>
                  <p className="hero-banner-block-text">In the Crossfire</p>
                </div>
                <button className="hero-banner-btn"><Link to="/firestarter/0">{"Read Now >"}</Link></button>
              </div>
              <div className="fs-hero-image" style={{backgroundImage:`url(${selectedImage})`}}></div>
              {/* <img className="fs-hero-image" src={selectedImage}/> */}
            </section>
            <section className="firestarter-info">
            <h1>FireStarter</h1>
            <p>More About FireStarter</p>
            <h2>Maxine Rubin is a police officer who has one goal in mind: Getting revenge on the killer of her mother. If that means isolating herself from friends, spitting in the face of the police commanders telling her to stay in line, or becoming the spark that starts a bloody conflict between the police and the ruthless gang known as the Rust Bandits - so be it.</h2>
            <p>
            <i>FireStarter</i> tells the story of <b>Maxine Amelia Rubin</b>, a young police officer who's personal vendetta against the criminals of Northern Serenity has led her to shake up the delicate 'false peace' between the NSPD and the gangs despite the consequences.              
            </p>
            <p>
            Maxine's efforts to uphold the NSPD Motto: "For Justice and the Greater Good" put her in direct conflict with the savage criminal gang known as the Rust Bandits and the corrupt beauracracy of the NSPD and Serenity Government. When a high ranking criminal snatches a young girl from her mother, Maxine and her partner Damien Schmidt defy the wishes of the Government and decide to bring the girl back - even if it means being the spark that starts a full-scale armed conflict between the Rust Bandits and the NSPD.
            </p>

            </section>
            <section className="firestarter-character-tiles">
            <h2 className="comic-preview-title blue-banner">Meet the Chraracters</h2>
              <div className="character-list">
                {characterTiles.map((character, i) =>{
                  return character.createCharacterTile(i);
                })}
              </div>
            </section>
            <section className="firestarter-chapter-tiles">
              <h2>Choose a Chapter</h2>
              <div className="tile-list">
                {chapterTiles.map((tile, i) =>{
                  return tile.createTile(i);
                })}
              </div>
            </section>
          </div>
      </Layout>
  )
}

export default FireStarter
