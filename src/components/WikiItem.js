import React, {Component} from 'react'
import {Link} from 'gatsby'

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
          <img src={this.props.image} alt={this.props.title}/>
          <h5 className="wiki-title">{this.props.title}</h5>
        </div>
        <div className="wiki-description">
          {this.props.description}
          <Link to={this.props.link}>
            <button className="btn btn-call-to-action">
            Read Now!
            </button>
          </Link>
        </div>
      </li>
    )
  }
}
export default WikiItem;