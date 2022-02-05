import React , {Component} from "react"
import moment from 'moment';
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

//Move State into it's own side compnent so the entire gallery doesn't re-render.
class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideBar:{
        hidden:true,
        content:null, //Change Content on Click of Gallery Item
      },
      sortedData:this.sortData(0),
    }
    this.handleClick = this.handleClick.bind(this);
  }

  sortData = (category) => {

    /*const shuffle = (array) => {
      for (var i = array.length-1; i >=0; i--) {
       
          var randomIndex = Math.floor(Math.random()*(i+1)); 
          var itemAtIndex = array[randomIndex]; 
           
          array[randomIndex] = array[i]; 
          array[i] = itemAtIndex;
      }
      return array;
    }*/


    const data = this.props.data.allContentfulGalleryItem;
    const sorted = [];
    let galleryItemData = data.edges;
    //galleryItemData = shuffle(galleryItemData);
    let filteredData = galleryItemData.filter(({node}) => {
      return node.category === category;
    })

    console.log(filteredData);

    filteredData.map(({node},i) =>{
      node.id = i;
      node.creationDate = new Date(node.creationDate);
      console.log(node.creationDate);
      sorted.push(node);
      return node;
    })

    sorted.sort((a,b)=> b.creationDate - a.creationDate);

    return sorted;
  }

  handleClick = (e) => {
    let selectedID = Number(e.currentTarget.id);
    let selectedData = this.state.sortedData.filter(node => node.id === selectedID);
    let sideBarObject = {
      hidden:false,
      content:selectedData[0],
    }
    this.setState({sideBar:sideBarObject});
  }

  hideSideBar = () => {
    let sideBarObject = {
      hidden:true,
      content:this.state.sideBar.content,
    }
    this.setState({sideBar:sideBarObject});
  }

  render(){
    this.sortData();
    return(
      <Layout>
    <SEO title="Gallery" />
    {this.state.sideBar.content === null ?
      null:
    <div 
    className={this.state.sideBar.hidden?"sidebar hidden":"sidebar open"}
    onClick={this.hideSideBar}
    >
      <Img
      fluid={this.state.sideBar.content.image.fluid}
      style={{
        maxWidth:'450px', 
        margin:'.5rem auto',
        boxSizing: 'border-box',
        border:'solid 5px #EDEAE5',
        borderRadius: '5px',
        }}/>
      <h2>{this.state.sideBar.content.title}</h2>
      <h3>{this.state.sideBar.content.medium}</h3>
      <div dangerouslySetInnerHTML={{__html:this.state.sideBar.content.description.childMarkdownRemark.html}}/>
    </div>
    }
    <ul className="gallery-header">
      <li 
      onClick= { ()=>this.setState({sortedData: this.sortData(0)})}>Main</li>
      <li onClick = {()=>this.setState({sortedData: this.sortData(1)})}>Heroine Rises Covers</li>
      <li onClick = {()=>this.setState({sortedData: this.sortData(2)})}>Sketchbook</li>
    </ul>

    <div className="gallery">
      {
        this.state.sortedData.map((node)=>{
          return(
            <div
            className="gallery-item"
            key={node.id}
            id={node.id}
            onClick={(e) => this.handleClick(e)}
            >
              <Img
              className="gallery-gatsby-image"
              style={
                {
                  boxSizing: 'border-box',
                  border:'solid 5px #2d2d2d',
                  borderRadius: '5px',
                  boxShadow: '5px 5px 10px rgba(0,0,0,.3)',
                }
              }
              alt={this.state.sortedData[0].category === 1 ? 'Heroine Rises ' + node.title: node.title}
              fluid={node.image.fluid}
              />
              <div className="gallery-item-tag">
                <p className="gallery-item-tag-title"><b><i>{node.title}</i></b>, {moment(node.creationDate).format('MMMM DD YYYY')}</p>
                <p className="gallery-item-tag-medium">{node.medium}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  </Layout>
    )
  }
}
export default Gallery

export const query = graphql `query{
  allContentfulGalleryItem {
  edges {
    node {
      featured
      creationDate
      medium
      category
      title
      image {
        resize(width: 100) {
          src
          width
          height
        }
        fluid(maxWidth: 613) {
          ...GatsbyContentfulFluid_noBase64
      }
      }
      description {
        childMarkdownRemark{
          html
        }
    }
  }
}
}
}`
