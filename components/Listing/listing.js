
'use client';
import React, { useEffect, useState } from "react";
import './listing.css';
import ExploreCard from './cards.js';
import { Button } from "@mui/material";
import Link from "next/link";
import MenuItem from "../menu/MenuItem";

export default function Listing({ list }) {

    const [bestSellers, setBestSellers] = useState([]);
    useEffect(() => {
      fetch('/api/menu-items').then(res => {
        res.json().then(menuItems => {
          setBestSellers(menuItems.slice(-4));
        });
    });
    }, []);
    
    return (
        <>
        <div className="listing-main-container light-theme">
            <div><img className="background" src="images/background.svg" alt="background" /></div>
            <listing>
                <div className="listing">
                    <div className="heading-listing">
                        <img className="vector-7" src="images/Vector 7.svg" alt="Vector-7" />
                        <div></div><div className="top">Top</div>  <div className='restaurant'>Best Selling</div> <div className="chain">Chain</div>
                        <img className="vector-8" src="images/Vector 8.svg" alt="Vector-8" />
                    </div>
                    <div className="description1">Discover Deliciousness: Your Go-To Destination for Culinary Excellence!</div>
                    <div className="explore-grid">

                        {/* {list.map((restaurant) =>{
                    return <ExploreCard restaurant={restaurant}/>;
                    })} */}

                        {/* {list.slice(0, 4).map((restaurant, index) => {
                        return <ExploreCard key={index} restaurant={restaurant} />;
                    })} */}


                        <div className="grid gap-4 grid-width sm:grid-cols-4 ">
                        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
                        </div>


                        <div className="explore-more-container"><Link href={'/menu'}><Button className="explore-more">Explore More &gt;&gt;</Button></Link></div>


                    </div>
                </div>
            </listing>
        </div>
        </>

    )
}














{/* <div><img className="box1" src="images/box.svg" alt="box1" /></div>
               <img className="list-1" src="images/list-1.svg" alt="list-1" />
               <div className='tag1'><span className='price1'>₹200 {"\n"} For Two </span></div>
               <img className="pic1" src="images/pic1.svg" alt="pic1" />
               <div><h1 className='n1'>kebabsville</h1></div>
               <div><h1 className='add1'>Sayaji Indore, H/1 , Scheme{"\n"}  No.54, Vijay Nagar</h1></div>
               <div><Button className ="order_now1">Order Now</Button></div> */}












{/*<div className='flex items-center box'>
                        <div><img className="box1" src="images/box.svg" alt="box1" /></div>
                        <div><img className="box2" src="images/box.svg" alt="box2" /></div>
                        <div><img className="box3" src="images/box.svg" alt="box3" /></div>
                        <div><img className="box4" src="images/box.svg" alt="box4" /></div>
                    </div>

                    <img className="list-1" src="images/list-1.svg" alt="list-1" />
                    <div className='tag1'><span className='price1'>₹200 {"\n"} For Two </span></div>
                    <img className="list-2" src="images/list-2.svg" alt="list-2" />
                    <div className='tag2'><span className='price1'>₹400 {"\n"} For Two </span></div>
                    <img className="list-3" src="images/list-3.svg" alt="list-3" />
                    <div className='tag3'><span className='price1'>₹250 {"\n"} For Two </span></div>
                    <img className="list-4" src="images/list-4.svg" alt="list-4" />
                    <div className='tag4'><span className='price1'>₹350 {"\n"} For Two </span></div>

                    <img className="pic1" src="images/pic1.svg" alt="pic1" />
                    <img className="pic2" src="images/pic2.svg" alt="pic2" />
                    <img className="pic3" src="images/pic3.svg" alt="pic3" />
                    <img className="pic4" src="images/pic4.svg" alt="pic4" />

                    <div><h1 className='n1'>kebabsville</h1></div>
                    <div><h1 className='n2'>Behrouze Biryani</h1></div>
                    <div><h1 className='n3'>Shiva Chinese</h1></div>
                    <div><h1 className='n4'>Nafees Restaurant</h1></div>

                    <div><h1 className='add1'>Sayaji Indore, H/1 , Scheme{"\n"}  No.54, Vijay Nagar</h1></div>
                    <div><h1 className='add2'>LG-24, Mangal City, AB Road,{"\n"} Vijay Nagar Square</h1></div>
                    <div><h1 className='add3'>Scheme No.-78-III, Opp. Chai{"\n"}  Sutta Bar</h1></div>
                    <div><h1 className='add4'>15, Bhawarkua main road, Opp.{"\n"}  Apple Hospital</h1></div>

                    <div><Button className ="order_now1">Order Now</Button></div>
                    <div><Button className ="order_now2">Order Now</Button></div>
                    <div><Button className ="order_now3">Order Now</Button></div> */}
{/* <div><Button className ="order_now4">Order Now</Button></div> */ }

