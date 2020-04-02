import React, {Component} from 'react'
import Img from 'gatsby-image';


class WikiItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDesc : false,
    }
  }
  render(){
    return(
      <li className="wiki-item">
        <div className="wiki-item-image">
          <img src={this.props.image} />
          <h5 className="wiki-title">{this.props.title}</h5>
        </div>
        <div className="wiki-description">
          {this.props.description}
        </div>
      </li>
    )
  }
}
export default WikiItem;