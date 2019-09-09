import heroineRisesImage from '../images/site/hr.jpg';
//CONVERT PNG TO JPG 
import SweetWaterImage from '../images/site/sw.jpg';
import OneShotCover from '../images/site/OneShotsCover.jpg'
import heroineRisesCoverImage from '../images/site/HeroineRisesCover.jpg';


import React from 'react';

let comicData = [
    {
      title:"Heroine Rises",
      id:0,
      url:"heroine-rises",
      image: heroineRisesImage,
      coverImage: heroineRisesCoverImage,
      showImages:false,
      synopsis:
      <div>
        <p><i>Heroine Rises</i> follows the story of Madeline Harbour, a small-time detective known for solving mysteries about runaway cats, stolen answer sheets, and misplaced library books. However, her dreams of becoming a 'heroine' in the city of Northern Serenity won't be achieved by beating petty criminals. Madeline knows she must move on - she needs to take on the city's 'actual' criminals to further her pursuit of the greater good.</p>
        <p>Grappling with her own self-doubt and her mother’s over-protective nature, Madeline and her friends take on bigger cases, hoping that solving them will propel them to that coveted 'heroic' status. However, Madeline's quest forces her to take on the city's dark side. Rampant corruption within the government and police department, the unspoken and shady history of their city, powerful crime hierarchies, mysterious and magical artifacts, and shadowy figures that seem to be trying to foil Madeline’s investigations at every turn soon make the amateur detective understand why Serenity has no heroes.</p>
      </div>,
      excerpt: "My main series, Heroine Rises is a adventure story with a hint of mystery that follows the naive but determined Madeline Harbour as she faces off against the many criminals in the city of Northern Serenity!"
    },
    {
      title:"One Shots",
      id:1,
      url:"one-shots",
      image: SweetWaterImage,
      coverImage:OneShotCover,
      showImages:true,
      synopsis: 
      <div>
        <p>Every once in a while I make a comic that has nothing to do with any other series or places characters from other series in non-canon context. Or I just make some for fun or practice. Either way, those comics end up here: regular non-serialized standalone comics.</p>
      </div>,
      excerpt: "Regular standalone comics that don't fall into another category.",
    }
  ]
export default comicData;