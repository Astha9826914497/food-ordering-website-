"use client";
import { Button } from "@mui/material";
import "./hero.css";

export default function Hero() {
  return ( 

  <div className="hero-main-container light-theme">
  <hero className="hero">
  <div>
  <img  className="HeroImage" src="images/Hero.svg" alt="HeroImage" />
  <div className="heading-flex"><div className="CravingFor">Craving For</div><div className="SomethingNew">Something New?</div></div>
  <div className="description">
     Dive into a World of Exquisite Flavors, All at Your Fingertips! Treat Yourself to the Finest Cuisine from Top Restaurants, 
     Delivered Straight to Your Doorstep, indulge in Culinary Excellence without Leaving the Comfort of Your Home!
  </div>
  <div><Button className ="explore-now">Explore NOW !</Button></div>
  </div>
  </hero>
  </div>
  );
}

