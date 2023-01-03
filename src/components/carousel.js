import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'gatsby'

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
    };
    console.log(this.props.data);
    return (
      <div>
        <Slider {...settings}>
          {
            this.props.data.map((slide) => {
              return (
                <div>
                  <div className="banner-image-cover"></div>
                  <img className="banner-image" src={slide.image} alt={slide.title}></img>
                  <Link to={slide.link}>
                  <div className="banner-description">
                      <h2 className={"banner-title " + slide.color + "-banner"}>{slide.title}</h2>
                      <h3 className="banner-desc">{slide.description}<span className={slide.color + "-text"}>{slide.keyWord}</span></h3>
                  </div>
                  </Link>
                </div>
                
              )
            })
          }
        </Slider>
      </div>
    );
  }
}