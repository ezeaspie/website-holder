import React, { Component } from "react";
import CharData from '../data/characterSettingData.json';

class WikiNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = CharData;
    return (
      <ul className="wiki-nav">
        <ul>
          <li className="title">Major</li>
          {
          data.map((item,i) => {
            if(i < 3){
              return (
                <li>
                  <a href={"https://www.ezequielespinoza.com/heroine-rises/" + item.url}>{item.physical.name}</a>
                </li>
              )
            }
          })
        }
        </ul>
        <ul>
          <li className="title">Supporting</li>
          {
          data.map((item,i) => {
            if(i >= 3){
              return (
                <li>
                  <a href={"https://www.ezequielespinoza.com/heroine-rises/" + item.url}>{item.physical.name}</a>
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