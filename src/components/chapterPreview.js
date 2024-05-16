import React, {Component} from 'react';
import {Link} from 'gatsby';
import { FaAngleDoubleRight } from "react-icons/fa";

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
            <Link to={"/"+this.props.link} className="chapter-preview">
                        <div className='chapter-preview-info'>
                            <h2>{this.props.title} Chapter {chapter.chapter+1}</h2>
                            <h4>{chapter.title}</h4>
                            <p className="chapter-preview-desc">
                            {/* {chapter.description} */}
                            </p>  
                        </div>
                        <FaAngleDoubleRight />
            </Link>
        )
    }
}

export default ChapterPreview;