import React from 'react';
import './page.css';
import { Button } from "@mui/material";
import '../../components/Listing/listing';
import '../../Data/restaurants';
import {restaurants} from "../../Data/restaurants"; 
import ExploreCard from '../../components/Listing/cards';
import Link from "next/link";
import Footer from "../../components/footer/footer"

const explorepage = () => {
  return (
    <div className='light-theme main-container'>
      <div className='head_explore'>
        <div className="top_explore">Top</div>  <div className='restaurant_explore'>Restaurant </div> <div className="chain_explore">Chain</div>
        <img className="vector-7_explore" src="images/Vector 7.svg" alt="Vector-7" />
        <img className="vector-8_explore" src="images/Vector 8.svg" alt="Vector-8" />
        <div className="description_explore">Discover Deliciousness: Your Go-To Destination for Culinary Excellence!</div>
      </div>
      <div className="listing_explore">      
          <div className="explore-grid_explore">
          {restaurants.map((restaurant) =>{
          return <ExploreCard restaurant={restaurant}/>;
          })}
          </div>
      </div>
      
        <div>
        <Footer/>  
        </div>
      
      </div>
  )
}

export default explorepage
