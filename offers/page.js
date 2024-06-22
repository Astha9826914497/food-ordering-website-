import "./page.css";
import Link from "next/link";
import { Button } from "@mui/material";
import '../../components/Listing/listing';
import '../../Data/restaurants';
import { restaurants } from "../../Data/restaurants";
import ExploreCard from '../../components/Listing/cardsoffers';
import Footer from "../../components/footer/footer";

export default function offers() {
    return (
        <div className="offers-main-container light-theme">
                <div className="heading_offers">
                    <div className="Restaurants">Restaurant</div>
                    <div className="With-great">with great</div>
                    <div className="offer-img"><img src="images/offers.svg" /></div>
                    <div className="offer">offers</div>
                </div>

                <div className="explore-grid_explore">
                    {restaurants.map((restaurant) => {
                        return <ExploreCard restaurant={restaurant} />;
                    })}
                </div>

                <div>
                <Footer/>
                </div>
        </div>
    )
}

