import * as React from 'react'
import Layout from '../components/layout';
import comicData from '../data/comicData';
import { Link } from 'gatsby'


const ComicPage = () => {
    const colorClassList = ['orange','pink','red','yellow','blue'];
    let colorClass = colorClassList[0];
    return(
        <Layout>
                <div className="comic-list">
                    {comicData.map((comic, i) =>{
                        return(
                            <div className='comic-list-preview'>
                                <img src={comic.coverImage} alt={comic.title}></img>
                                <Link to={'/' + comic.secondUrl} key={i}>
                                {comic.title}
                                </Link>
                                <div>
                                    <h5>{comic.title}</h5>
                                    <p>{comic.excerpt}</p>
                                </div> 
                            </div>
                        )
                    })}
                </div>
        </Layout>
    )
}

export default ComicPage