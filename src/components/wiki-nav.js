import React, { Component } from "react";
import CharData from '../data/characterSettingData.json';
import {Link} from 'gatsby';

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
                <Link to={"/heroine-rises/" + item.url} key={i}>
                  {item.physical.name}
                </Link>
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
                  <Link to={"/heroine-rises/" + item.url} key={"s" + i}>
                    {item.physical.name}
                  </Link>
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