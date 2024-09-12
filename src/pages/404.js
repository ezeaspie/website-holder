import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


import Maxine from '../images/site/404/ChibiMax-I.jpg';
import MaxineII from '../images/site/404/ChibiMax-II.jpg';
import Madeline from '../images/site/404/ChibiMad.jpg';
import Juliette from '../images/site/404/ChibiJulie.jpg';
import Damien from '../images/site/404/ChibiDam.jpg';
import Julian from '../images/site/404/ChibiJulian.jpg';



const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const characterCombinationArr = [
  {
    characterImg: Maxine,
    dialouge: "Well, why are you still here?"
  },
  {
    characterImg: MaxineII,
    dialouge: "After hours of looking, Maxine wasn't able to find that page!"
  },{
    characterImg: Madeline,
    dialouge: "But don't you worry, I'm on the case!"
  },{
    characterImg: Damien,
    dialouge: "We didn't find that page, but I'm glad I found you."
  },{
    characterImg: Julian,
    dialouge: "I can look again but it probably doesn't exist."
  },{
    characterImg: Juliette,
    dialouge: "Can't find it, but at least we tried. Now shoo."
  },


]

// Returns a random integer from 0 to 5;
const int = Math.floor(Math.random() * 6); 

const NotFoundPage = () => {
  return (
    <Layout>
    <main className="page-not-found">
      <h1 style={headingStyles}>Page not found</h1>
      <div>
        <img src={characterCombinationArr[int].characterImg}></img>
        <p className="char-quote">{characterCombinationArr[int].dialouge}</p>
      </div>
        <Link className="return-link blue"  to="/">Go home</Link>.
    </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
