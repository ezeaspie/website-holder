import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Madeline from '../images/site/chibiMaddie.png';
import Maxine from '../images/site/chibiMaxine.png';

const getRandomNum = (max) => Math.floor(Math.random() * max);

let randomInt = getRandomNum(2);

const pageOptions = [
  {
    image: Madeline,
    flavorText: "But don't you worry, I'm on the case!"
  },
  {
    image: Maxine,
    flavorText: "Well? What are you still doing here?"
  }
]

let character = pageOptions[randomInt];

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <h2>{character.flavorText}</h2>
    <img class="invalid-url-image" src={character.image}></img>
  </Layout>
)

export default NotFoundPage
