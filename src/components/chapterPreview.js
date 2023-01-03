import React, {Component} from 'react';
import {Link} from 'gatsby';

class ChapterPreview extends Component {
    constructor(props){
        super(props);
        this.state={
            descIsShown: false,
        }
    }
    render(){
        let chapter = this.props.chapter;
        return(
            <div className="chapter-preview">
                    <div className="chapter-preview-main">
                        <div className='chapter-preview-info'>
                            <h4>{this.props.title} {chapter.chapter+1}</h4>
                            <h3>{chapter.title}</h3>
                        </div>
                        
                        <div className="btn-set">
                        <button 
                        onClick={()=>this.setState({descIsShown:!this.state.descIsShown})}
                        className={"btn btn-info"}>?</button>
                        
                        <Link to={"/"+this.props.link}>
                        <button className={"btn " + this.props.color}>
                        Read Now
                        </button>
                        </Link>
                        </div>
                    </div>
                    <div className={this.state.descIsShown?"chapter-preview-desc shown":"chapter-preview-desc"}>
                        {chapter.description}
                    </div>
            </div>
        )
    }
}

export default ChapterPreview;