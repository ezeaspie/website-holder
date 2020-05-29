import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Madeline from '../images/site/Maddie0.jpg';
import Juliette from '../images/site/Juliette0.jpg';
import Julian from '../images/site/Julian0.jpg';
import WikiItem from '../components/WikiItem';
import Others from '../images/site/More0.jpg';
import Collage from '../images/site/comicCollage.jpg';
import Chapter1 from '../images/site/hr1.png';
import ChapterChoice from '../images/site/comicChapterChoice.jpg';
import SerenityEast from '../images/site/serenityEast.jpg';
import ComicSectionOption from '../components/comicSectionOption';
import Inheritence from '../images/site/inheritence.jpg';
import SU from '../images/site/inheritence.png';
import Banner from '../images/site/HeroineRisesBanner.jpg';

//CHANGE THE INHERITENCE AND CHAPTER 1 PICS TO JPG INSTEAD OF PNG!!!!
//Also change Cynthia's pic into a BLACK AND WHITE

class Hub extends Component {
  constructor(props){
    super(props);
    this.state = {
      introHidden: true,
    }
  }
  render(){
    //Add ability to add more than one paragraph to the descriptions.

    const comicSectionData = [
      [
        {
          disabled:false,
          title:'Chapter 1',
          image: Chapter1,
          link: 'https://www.ezequielespinoza.com/heroine-rises/0/0',
        },
        {
          disabled:false,
          title:'Choose a Chapter',
          image: ChapterChoice,
          link: 'https://www.ezequielespinoza.com/heroine-rises/',
        }
      ],
      [
        {
          disabled:false,
          title:'Serenity East',
          image: SerenityEast,
          link: 'https://www.ezequielespinoza.com/heroine-rises/0/0',
        },
        {
          disabled:true,
          title:'Inheritence',
          image: Inheritence,
          link: 'https://www.ezequielespinoza.com/heroine-rises/23/0',
        },
        {
          disabled:true,
          title: 'Serenity Underground',
          image:SU,
          link:'https://www.ezequielespinoza.com/heroine-rises/58/0',
        }
      ],
    ]

    const characterData = [
      {
        name: "Madeline Harbour",
        image: Madeline,
        description:<p>Rich, Ambitious, but Naive. Madeline is the leader of her detective group and dreams of being a heroine. Her physical weakness is mitigated by her quick thinking and empathy.</p>,
        link: `heroine-rises/madeline-harbour`
      },
      {
        name:"Juliette Sandover",
        image:Juliette,
        description:<p>Brash, Hardy, Sassy. Juliette is the team's rock - or steel. Her bold personality may get her in trouble, but under Madeline's watch, Juliette gives the team a sharp edge in confrontations.</p>,
        link:`heroine-rises/juliette-sandover`
      },
      {
        name:"Julian Gaitan",
        image:Julian,
        description:<p>Eager, Idealistic, and a wee bit Cowardly. Julian tries to be the balance between Madeline's passive and Juliette's fire. When not arguing with Juliette, Julian handles the logistics and research.</p>,
        link:`heroine-rises/julian-gaitan`
      },
      /*{
        name:"More...",
        image:Others,
        description:<p>From the fiery NSPD Officer in Maxine Rubin to the high riding businessman in Robert Silva - discover all you wanted to know about other characters in Heroine Rises!</p>,
        link:`heroine-rises-list`
      }*/
    ]

    return(
    <Layout>
        <SEO title="Heroine Rises" keywords={[`heroine`, `rises`, `comic`]} />
        <div>
          <img src={Banner} alt="Heroine Rises Banner"></img>
        </div>
          <div className="introduction">
            <div className="intro-header">
            <h1>Heroine Rises</h1>
            <ul className="hub-nav">
              <li>Jump to:</li>
              <li><a href="#c-s">Comic</a></li>
              <li><a href="#w-s">Characters</a></li>
            </ul>
            </div>
            <div className="intro-tagline">
              <h2>Madeline Harbour and her team of friends face off against the menaces of Northern Serenity in their pursuit of Heroism and the Greater Good.</h2>
              <p 
              id="tagline-trigger"
              onClick={()=>this.setState({introHidden:!this.state.introHidden})}
              >{this.state.introHidden?"More about Heroine Rises":"Less about Heroine Rises"}
              </p>

            </div>
            <div className={this.state.introHidden?"intro-tagline-hidden":"intro-tagline"}>
              <h3>On the island city of Northern Serenity, gangs rule the history scarred streets and citizens fight for survival... that is, unless you're Madeline Harbour and live in the comfort of the Eastern Island. From the outside looking in, Madeline longs to ease the city's divisions by doing what she does best - solving mysteries. However, her desire of becoming a Heroine the city can look up to puts her in the face of the city's rampant corruption, powerful crime lords, mysterious and mystical artifacts, and shadowy figures bent on stopping her. Madeline realizes that her luxorious upbringing has not prepared her for the quest - but so long as she has her friends - that coveted 'heroic' status is still within reach.</h3>
              <p>Story and Art by Ezequiel Espinoza Diaz, created December 2018</p>
            </div>
          </div>
          
          <div className="wiki-section" id="w-s">
            <div className="wiki-container">
            <h2>Meet the Cast</h2>
            <ul>
              {
                characterData.map(character => {
                  return(
                    <WikiItem
                    link={character.link}
                    image={character.image}
                    title={character.name}
                    description={character.description}
                    />
                  )
                })
              }
            </ul>
            </div>
          </div>

          <div 
          className="comic-section-container" 
          id="c-s"
          style={{
            background:`url(${Collage})`,
            backgroundSize:'cover',
          }}
          >
            <div className="comic-section">
              <h2 >Read Online</h2>
              <h3>Want to jump in from the start? Or A certain chapter?</h3>
              <div className="comic-start-options">
                {
                  comicSectionData[0].map(item =>{
                    return(
                      <ComicSectionOption 
                      title={item.title}
                      image={item.image}
                      link={item.link}
                      disabled={item.disabled}
                      />
                    )
                  })
                }
              </div>
              <h2>Specific Arcs</h2>
              <div className="comic-start-options">
                {
                  comicSectionData[1].map(item =>{
                    return(
                      <ComicSectionOption 
                      title={item.title}
                      image={item.image}
                      link={item.link}
                      disabled={item.disabled}
                      />
                    )
                  })
                }
              </div>
            </div>          
          </div>
        
      </Layout>
    )
  }
  
}

export default Hub