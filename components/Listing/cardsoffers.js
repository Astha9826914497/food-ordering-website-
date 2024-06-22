import React from 'react'
import "./cards.css";
import "./cardsoffers.css"


const cards = ({restaurant}) => {

    const name = restaurant?. info?. name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?. order?. deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines =  restaurant?.info?.cuisine?.map((item) => item.name ).slice(0,3);
    const bottomContainers = restaurant?.bottomContainers;
    const discount =
     offers.length > 1 
     ? offers[1].text
     : offers.length === 1 
     ? offers[0].text : 
     null ;

  return (
    <div className='light-theme'>
    {discount && (
      <div className="explore-card cur-po">
        <div className="explore-card-cover">
          <img src={coverImg} alt={name} className="explore-card-image"/>
          <div className="delivery-time">{deliveryTime}</div>
          {discount && <div className='discount-offer absolute-center'>{discount}</div>}
          <div className='res-row'>
            <div className="res-name">{name}</div>
            {rating && (
              <div className="res-rating" style={{display:'inline-flex'}}>
                {rating} <img className="star" src="images/Star.svg"/>
              </div>
            )}
          </div>
          <div className="res-row"> 
            {cuisines.length > 0 && 
              <div className="res-cuisine">
                {cuisines.map((item, i) => (
                  <span className="res-cuisine-tag">{item}{i !== cuisines.length - 1 && ", "}</span>
                ))}
              </div>
            }
            {approxPrice && <div className="approx-price">{approxPrice}</div>}
          </div>
          {bottomContainers.length > 0 && 
            <div>
              <div className="card-separator"></div>
              <div className="explore-bottom">
                <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height:'18px'}}/>
                <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
              </div>
            </div>
          }
        </div>
      </div>
    )}
    </div>
  
  )
}

export default cards

