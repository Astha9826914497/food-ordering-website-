import './footer.css';
export default function footer() 
{
    return (
        <>
           <div className="footer-main-frame light-theme">
            
            <div className="s-div7">
            <div><img className="logo1" src="images/Logo.svg" alt="logo"/></div>
            </div>
            
            <div className="bg-div3">
                  <div className="foodstergo">FoodsterGo</div>
                  <div className="footer_des">Become a part of our growing community of food enthusiasts and experience the convenience and joy of FoodsterGo for yourself.</div>
                  <div className="com">
                      <div><img src="images/Facebook.svg" ></img></div>
                      <div><img src="images/instagram.svg" ></img></div>
                      <div><img src="images/Twitter.svg" ></img></div>
                  </div>
                  <div className="aboutus">About Us</div>
                  <div className="aboutus1">About Us</div>
                  <div className="serviceus">Service Us</div>
                  <div className="contact">Contact</div>
  
                  <div className="company">Company</div>
                  <div className="partnership">Partnership</div>
                  <div className="termofuse">Term of Use</div>
                  <div className="privacy">Privacy</div>
                  <div className="sitemap">Sitemap</div>
  
                  <div className="getintouch">Get in touch</div>
                  <div className="getintouch_des">Got questions or feedback? Reach out to our friendly customer support team – we're here to help!</div>
                  <input className="placeholder-opacity-75 footer_contact" placeholder="Email"></input>
                  <button className="send">Send</button>
            </div>

            <div className="s-div8">
              <div className="rectangle3">
                  <div className="copywrite">Copyright © 2024 FoodsterGo.</div>
              </div>
            </div>

        </div>
               
        </>

    )
}
