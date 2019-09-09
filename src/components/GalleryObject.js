import React, {Component} from 'react'
import Img from 'gatsby-image';


class GalleryObject extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDesc : false,
    }
  }
  render(){
    let content = null;
    let data = this.props.data;
    let hasData = false;

    if(hasData !== undefined){
      hasData = true;
    }

    if(hasData){
      content =
        <div className="gallery-item-tag"
         onMouseOver={()=>{this.setState({showDesc:true})}}
         onMouseOut={()=>{this.setState({showDesc:false})}}
         >
          <p className="gallery-item-tag-title"><b><i>{data.title}</i></b>, {data.date[1]}</p>
          <p className="gallery-item-tag-medium">{data.medium}</p>
        </div>
    }
    return(
      <div className="gallery-item">
      {
        this.props.isGif?<img className="gallery-image" src={this.props.source} alt={content === null ?null:data.description}/>:
        <Img className="gallery-image" fluid={this.props.source} alt={content === null ?null:data.description} />
      }
        {content}
      </div>
    )
  }
}
export default GalleryObject;