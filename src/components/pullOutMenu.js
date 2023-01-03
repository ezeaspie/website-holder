import React, {Component} from 'react'
import {Link, withPrefix} from 'gatsby' 

class PullOutMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDesc : false,
    }
  }
  render(){
    let chapterArray = this.props.chapterArray;
    const comicName = this.props.comicName;
    let isClosed = this.props.isClosed;
    console.log(this.props.isClosed);
    return(
      <div className={isClosed?"pull-out-menu menu-closed":"pull-out-menu"}>
        <ul className='pull-out-list'>
          {
              chapterArray.map((chapter,i)=>{
                  return (
                    <li className='pull-out-item'>
                      <Link
                      key={`chapter${i}`}
                      to={`/${comicName}/${chapter.chapter}/0`}>
                        <h5 className='pull-out-title'>{`${chapter.chapter+1}. ${chapter.title}`}</h5>
                      </Link>
                    </li>
                  )
              })
          }
        </ul>
        <h1></h1>
      </div>
    )
  }
}
export default PullOutMenu;