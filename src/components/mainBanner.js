import * as React from 'react';
import {Link , graphql, useStaticQuery} from 'gatsby';
import heroImage from '../images/site/hloHero.jpg';
import smallImage from '../images/site/chibiMaxine.png';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';

const MainBanner = () => {
    const raw = useStaticQuery(graphql`
    query{
        allContentfulMainBannerItem {
          nodes {
            title
            subtitle
            color
            accentText
            smallImage {
              gatsbyImage(fit: COVER, width: 500)
            }
            largeImage {
              gatsbyImage(fit: COVER, width: 1920)
            }
          }
        }
      }
    `);
    const bannerInfo = raw.allContentfulMainBannerItem.nodes[0];
    
    const images = withArtDirection(getImage(bannerInfo.largeImage), [
        {
          media: "(max-width: 767.98px)",
          image: getImage(bannerInfo.smallImage),
        },
      ])

      console.log(images);
    return(
        <div className='main-banner'>
            {/* <img src={heroImage}></img> */}
            <GatsbyImage className="banner-image" image={images}/>
            <div className="banner-content">
                    <h5 className={'banner-category ' + bannerInfo.color}>{bannerInfo.accentText}</h5>
                      <h2 className={"banner-headline " + 'pink' + "-banner"}>{bannerInfo.title}</h2>
                      <h3 className="banner-subhead">{bannerInfo.subtitle}</h3>
                        <Link to="/" className='blog-link-button red'>{"Read Now  >>"}</Link>
                  </div>
        </div>
    )
}

export default MainBanner