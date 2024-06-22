import './about.css';
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function about(){
    return(
        <div className='about-main-container light-theme'>
        <img className="about_background" src="images/about_background.svg"/>
        <about className="about">
        <div className="about-container">
          <div className='des-about-left'>
             <div className="AboutUs">About us</div>
             <div className="description_about">
             Welcome to FoodsterGo, your premier destination for convenient and delectable dining experiences. 
             Here at FoodsterGo, we're driven by our passion for seamlessly connecting food enthusiasts with their favorite eateries, 
             all with just a few taps on your device. Whether you're yearning for a satisfying, hearty meal from your beloved neighborhood 
             haunt or eager to embark on a culinary journey to discover new gastronomic delights, rest assured, we've got you covered.</div>
          </div>
          <div className='image-about-right'>
             <div><img className="chef_img" src="images/chef.svg"/></div>
             <img className="endless_love" src="images/Endless Love.svg"/>
             <div className="trusted_support">Trusted Support</div>
          </div>
        </div>
        </about>
        </div>
 
    )
}

