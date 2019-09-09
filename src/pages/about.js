import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import profile from '../images/site/me.jpg';

class About extends Component {
  render(){
        return(
      <Layout>
          
        <SEO title="About" />
        <div className="container">
        <div className="profile-main">
        <h1>About Me</h1>
        <img className="profile-image" src={profile} alt="profile"></img>
        <div className="profile-content">
            <ul>
                <li>Name: Ezequiel Espinoza Diaz</li>
                <li>Age: 21</li>
                <li>Location: Washington, D.C</li>
            </ul>
            <p>I like writing comics and code. Mostly comics. I study Web Development and like do drawings and comics in my free time.</p>
            <p>I make comics traditionally, pencils, inking, lettering, toning, with pencils, pens, and colored pencils. I tend to color digitally.</p>
            <p>Outside of Web Development and Art, I enjoy football/soccer and taking care of my Dalmatian Molly aquarium.</p>
            <p>If you would like to contact me in regards to art, web development, or simple conversation, feel free to contact me through Instagram or email.</p>
            <ul>
                <li><a href="https://www.instagram.com/ezeaspie/"><b>Instagram</b> - I post my best art as well as updates to comics. Sometimes (meaning: almost never) I post pictures of myself and other things I do.</a></li>
                <li><b>Email</b> - ezequielnoza@gmail.com</li>
                <li><a href="https://www.deviantart.com/ezeaspie"><b>DeviantArt</b> - Where I post almost any art I make - good or bad</a></li>
            </ul>
        </div>
        </div>
        </div>
    </Layout>
    )
  }
}
export default About;