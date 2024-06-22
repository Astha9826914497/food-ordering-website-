import './options.css';
export default function Options() {
    return(
        <>
        {/* <options className="options">
        <div className='options-container'>
          <div className="blacktext">What's on </div><div className="gradienttext">Your Mind ?</div>
          <div className="row1">
              <div className="image1"><img src="images/Pasta.svg"/></div>
              <div className="image2"><img src="images/Smoothie.svg"/></div>
              <div className="image3"><img src="images/Dosa.svg"/></div>
              <div className="image4"><img src="images/Burger.svg"/></div>
          </div>
          <div className="row2">
              <div className="image5"><img src="images/Pizza.svg"/></div>
              <div className="image6"><img src="images/Noodles.svg"/></div>
              <div className="image7"><img src="images/PaneerTikka.svg"/></div>
              <div className="image8"><img src="images/StuffedKhulche.svg"/></div>
          </div>
        </div>
        </options> */}

        <div className="options light-theme">
           <div className='heading'>
             <div className="blacktext">What's on </div><div className="gradienttext">Your Mind ?</div>
           </div>
           <div className="row1">
                 <div className="image"><img src="images/Pasta.svg"/></div>
                 <div className="image"><img src="images/Smoothie.svg"/></div>
                 <div className="image"><img src="images/Dosa.svg"/></div>
                 <div className="image"><img src="images/Burger.svg"/></div>
             </div>
             <div className="row2">
                 <div className="image"><img src="images/Pizza.svg"/></div>
                 <div className="image"><img src="images/Noodles.svg"/></div>
                 <div className="image"><img src="images/PaneerTikka.svg"/></div>
                 <div className="image"><img src="images/StuffedKhulche.svg"/></div>
             </div>
        </div>
        </>
 
    )
}
