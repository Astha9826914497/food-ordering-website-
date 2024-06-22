
import Hero from "../components/Hero/hero";
import Listing from "../components/Listing/listing";
import Options from "../components/Options/Options";
import About from "../components/about/about";
import More from "../components/more_than/more_than";
import Footer from "../components/footer/footer";
import Header from "../components/Header/header";
import {restaurants} from "../Data/restaurants"; 






export default function Home() {
  const restaurantList= restaurants;
  return (
  
    <div>
      <Header />
      <Hero/>
       <Listing list={restaurants} />
       <Options/>
       <About/>
       <More/>  
    </div>

  );
}

