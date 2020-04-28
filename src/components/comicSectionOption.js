import React, {Component} from 'react'

class ComicSectionOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDesc : false,
    }
  }
  render(){
    return(
      <div className="comic-start-option">
        {
          this.props.disabled?
          <div style={{opacity:'.6'}}>
            <img src={this.props.image} alt={this.props.title}/>
            <h5>{this.props.title}</h5>
          </div>
          :
          <a href={this.props.link}>
            <img src={this.props.image} alt={this.props.title}/>
            <h5>{this.props.title}</h5>
          </a>
        }
      </div>
    )
  }
}
export default ComicSectionOption;