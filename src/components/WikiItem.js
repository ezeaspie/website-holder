import React, {Component} from 'react'

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
        </div>
      </li>
    )
  }
}
export default WikiItem;