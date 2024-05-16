import heroineRisesImage from '../images/site/comicImages/heroineRisesThumbnail.jpg';
import heroineRisesCoverImage from '../images/site/heroineRisesCover.jpg';
import heroineRisesHero from '../images/site/heroineRisesHero.jpg';

import SweetWaterImage from '../images/site/comicImages/oneShotsThumbnail.jpg';

import OneShotCover from '../images/site/oneShotsCover.jpg';
import oneShotsHero from '../images/site/oneShotsHero.jpg';

import FireStarterCover from '../images/site/FireStarterCover.jpg';
import FireStarterThumbnail from '../images/site/comicImages/fireStarterThumbnail.jpg';
import FireStarterHero from '../images/site/fireStarterHero.jpg';

import React from 'react';

let comicData = [
    {
      title:"Heroine Rises",
      id:0,
      url:"heroine-rises",
      secondUrl:"heroine-rises/chapters",
      color: 'orange',
      image: heroineRisesImage,
      coverImage: heroineRisesCoverImage,
      heroImage: heroineRisesHero,
      showImages:false,
      synopsis:
      <div>
        <p><i>Heroine Rises</i> follows the story of Madeline Harbour, a small-time detective known for solving mysteries about runaway cats, stolen answer sheets, and misplaced library books. However, her dreams of becoming a 'heroine' in the city of Northern Serenity won't be achieved by beating petty criminals. Madeline knows she must move on - she needs to take on the city's 'actual' criminals to further her pursuit of the greater good.</p>
        <p>Grappling with her own self-doubt and her mother’s over-protective nature, Madeline and her friends take on bigger cases, hoping that solving them will propel them to that coveted 'heroic' status. However, Madeline's quest forces her to take on the city's dark side. Rampant corruption within the government and police department, the unspoken and shady history of their city, powerful crime hierarchies, mysterious and magical artifacts, and shadowy figures that seem to be trying to foil Madeline’s investigations at every turn soon make the amateur detective understand why Serenity has no heroes.</p>
      </div>,
      excerpt: "My main series, Heroine Rises is a adventure story with a hint of mystery that follows the naive but determined Madeline Harbour as she faces off against the many criminals in the city of Northern Serenity!",
      tagline: "An amateur detective dreams of becoming a beacon of hope for the city of Northern Serenity."
    },
    {
      title:"One Shots",
      id:1,
      url: "one-shots",
      secondUrl:"one-shots/chapters",
      color:'pink',
      image: SweetWaterImage,
      coverImage:OneShotCover,
      heroImage:oneShotsHero,
      showImages:true,
      synopsis: 
      <div>
        <p>Every once in a while I make a comic that has nothing to do with any other series or places characters from other series in non-canon context. Or I just make some for fun or practice. Either way, those comics end up here: regular non-serialized standalone comics.</p>
      </div>,
      excerpt: "Regular standalone comics that don't fall into another category.",
      tagline: "A collection of non-serialized comics and standalone stories."
    },
    {
      title:"FireStarter",
      id:2,
      url: "firestarter",
      secondUrl:"firestarter/chapters",
      color:'red',
      image: FireStarterThumbnail,
      coverImage: FireStarterCover,
      heroImage:FireStarterHero,
      showImages: true,
      synopsis:
      <div>
        <p><i>FireStarter</i> tells the story of Maxine Rubin, a young police officer who's personal vendetta against the criminals of Northern Serenity has led her to shake up the delicate 'false peace' between the NSPD and the gangs despite the consequences.</p>
        <p>Maxine's efforts to uphold the NSPD Motto: "For Justice and the Greater Good" put her in direct conflict with the savage criminal gang known as the Rust Bandits and the corrupt beauracracy of the NSPD and Serenity Government. When a high ranking criminal snatches a young girl from her mother, Maxine and her partner Damien Schmidt defy the wishes of the Government and decide to bring the girl back - even if it means being the spark that starts a full-scale armed conflict between the Rust Bandits and the NSPD.</p>
        </div>,
      excerpt: "Maxine Rubin and Damien Schmidt take on the Rust Bandits in the pursuit of Justice and the Greater Good.",
      tagline: "A fiery officer, a political game, a sadistic killer, a daughter caught in the crossfire.",
    }
  ]
export default comicData;