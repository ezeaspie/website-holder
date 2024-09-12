import * as React from 'react'
import Layout from '../components/layout';
import comicData from '../data/comicData';
import { Link } from 'gatsby'


const comicLocalInfo = [
    {
        classification: "Comic",
        years: "2018-2021",
        categories: 'Drama | Mystery'
    },
    {
        classification: "Collective",
        years: "2016-Now",
        categories: 'Assorted'
    },
    {
        classification: "Comic",
        years: "2022-Now",
        categories: 'Noir | Thriller'
    },
]

const ComicPage = () => {
    const colorClassList = ['orange','pink','red','yellow','blue'];
    let colorClass = colorClassList[0];



    return(
        <Layout>
                <div className="comic-list">
                    {comicData.map((comic, i) =>{
                        return(
                            <div className='comic-list-preview'>
                                <div className='comic-list-main'>
                                    <img src={comic.coverImage} alt={comic.title}></img>
                                    <div className='comic-list-main-info'>
                                    <p className='comic-list-category'>{comicLocalInfo[i].classification}</p>
                                    <h2>{comic.title}</h2>
                                    <div className='comic-list-subhead'>
                                        <span>{comicLocalInfo[i].years}</span>
                                        <span>{comicLocalInfo[i].categories}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='comic-list-desc'>
                            <p className='comic-list-excerpt'>{comic.excerpt}</p>
                            <Link  className ='comic-list-link' to={'/' + comic.secondUrl} key={i}>
                                {'Read ' + comic.title + ' >'}
                            </Link>
                            </div>
                                
                            
                            </div>
                        )
                    })}
                </div>
        </Layout>
    )
}

export default ComicPage