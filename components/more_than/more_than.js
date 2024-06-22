import './more_than.css';
export default function more_than() {
    return (
        <>
            <more className="light-theme">
            <div className='more'>
            <div className='heading-more'>
               <img className="more_img" src="images/more_img.svg"/>
               <div className="more_heading">
               <div>We</div><div> are </div><div className="pink">more </div><div>than </div><div className="orange">delivery </div><div>service </div>
               </div>
               <div className="more_des">
               At FoodsterGo, we're more than just a delivery service; we're your culinary companion, connecting you 
               with a world of flavors and dining experiences right at your fingertips.
               </div>
            </div>
            <div className='boxes'>
               <div className="more_box1">
                 <img className="servicebox1" src="images/servicebox.svg"/>
                 <img className="icon1" src="images/icon1.svg"/>
                 <div className="box1_heading">Diverse Menu</div>
                 <div className="box1_des">Explore an array of flavors with our diverse menu offerings, tailored to satisfy every craving.</div>
               </div>
   
               <div className="more_box2">
                 <img className="servicebox2" src="images/servicebox.svg"/>
                 <img className="icon2" src="images/icon2.svg"/>
                 <div className="box2_heading">Fast Delivery</div>
                 <div className="box2_des">Experience lightning-speed delivery with our swift and efficient service, ensuring your meal arrives hot and fresh.</div>
               </div>
   
               <div className="more_box3">
                 <img className="servicebox3" src="images/servicebox.svg"/>
                 <img className="icon3" src="images/icon3.svg"/>
                 <div className="box3_heading">Quality</div>
                 <div className="box3_des">Indulge in excellence with our commitment to quality ingredients and meticulous preparation, ensuring every bite delights.</div>
               </div>
            </div>
           
            <div className="more_footer-main-frame">
            
            <div className="more_s-div7">
            <div><img className="more_logo1" src="images/Logo.svg" alt="logo"/></div>
            </div>
            
            <div className="more_bg-div3">
                  <div className="more_foodstergo">FoodsterGo</div>
                  <div className="more_footer_des">Become a part of our growing community of food enthusiasts and experience the convenience and joy of FoodsterGo for yourself.</div>
                  <div className="more_com">
                      <div><img src="images/Facebook.svg" ></img></div>
                      <div><img src="images/instagram.svg" ></img></div>
                      <div><img src="images/Twitter.svg" ></img></div>
                  </div>
                  <div className="more_aboutus">About Us</div>
                  <div className="more_aboutus1">About Us</div>
                  <div className="more_serviceus">Service Us</div>
                  <div className="more_contact">Contact</div>
  
                  <div className="more_company">Company</div>
                  <div className="more_partnership">Partnership</div>
                  <div className="more_termofuse">Term of Use</div>
                  <div className="more_privacy">Privacy</div>
                  <div className="more_sitemap">Sitemap</div>
  
                  <div className="more_getintouch">Get in touch</div>
                  <div className="more_getintouch_des">Got questions or feedback? Reach out to our friendly customer support team – we're here to help!</div>
                  <input className="more_placeholder-opacity-75 more_footer_contact" placeholder="Email"></input>
                  <button className="more_send">Send</button>
            </div>

            <div className="more_s-div8">
              <div className="more_rectangle3">
                  <div className="more_copywrite">Copyright © 2024 FoodsterGo.</div>
              </div>
            </div>

        </div>
        </div>
        </more>      
        </>

    )
}
