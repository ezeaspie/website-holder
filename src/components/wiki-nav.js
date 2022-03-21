import React, { Component } from "react";
import CharData from '../data/characterSettingData.json';
import {Link} from 'gatsby';
import Madeline from '../images/site/Maddie0.jpg';
import Juliette from '../images/site/Juliette0.jpg';
import Julian from '../images/site/Julian0.jpg';
import Maxine from '../images/site/Maxine0.jpg';

class WikiNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = CharData;
    const mainCharacterImages = [Madeline,Juliette,Julian,Maxine];

    return (
      <ul className="wiki-nav">
        <h2 className="title">Major</h2>
        <ul className='mainCharacters'>
          {
          data.map((item,i) => {
            if(i < 4){
              return (
                <li className="mainCharacterCard">
                  <Link to={"/heroine-rises/" + item.url} key={i}>
                    <img src={mainCharacterImages[i]}/>
                    {item.physical.name}
                  </Link>
                </li>     
              )
            }
          })
        }
        </ul>
        <h2 className="title">Supporting</h2>
        <ul className='supportCharacters'>
          {
          data.map((item,i) => {
            if(i >= 4){
              return (
                <li className="supportCharacterCard">
                  <Link to={"/heroine-rises/" + item.url} key={"s" + i}>
                    {item.physical.name}
                  </Link>
                  <div className="supportCharacterColor" style={{backgroundColor: `#${item.physical.color}`}}></div>
                </li>
              )
            }
          })
        }
        </ul>
        
      </ul>
    );
  }
}

export default WikiNav;