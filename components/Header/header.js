"use client";
import React, { useContext } from 'react';
import Link from "next/link";
import "./header.css";
import { Button, Switch } from "@mui/material";
import { styled } from '@mui/material/styles'
import { useState, useEffect, useRef } from 'react';
import { signOut, useSession } from "next-auth/react";
import { CartContext } from '../AppContext';
import ShoppingCart from '../icons/ShoppingCart';



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));



export default function header() {

  const [switchState, setSwitchState] = useState(0); 

  const handleSwitchChange = (event) => {
    setSwitchState(event.target.checked ? 1 : 0);
  };

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const { cartProducts } = useContext(CartContext);

  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    };


    const fetchAddress = () => {
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=b7d91e700cc24e0a97f5d67c0700abf6`)
        .then(response => response.json())
        .then(result => setAddress(result.features[0].properties.address_line2))
        .catch(error => console.log('error', error));
    };

    // Fetch location data
    fetchLocation();

    // Fetch address data after setting latitude and longitude
    if (latitude && longitude) {
      fetchAddress();
    }

    // Cleanup function (if needed)
    return () => {
      // Any cleanup code if needed
    };

  }, [latitude, longitude]);




  const session = useSession();
  const status = session?.status;
  const [open, setOpen] = useState(false);
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  });

  return (
    <>
      <header className="header">
        <div className="flex items-center font-semibold text-black-500 font-primary">
          <div ref={menuRef}>
            <div><img className="hamburger" onClick={() => { setOpen(!open) }} src="images/hamburger.svg" alt="Menu" />
              <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <ul>

                  <Link href={'/'} className='link-text'><img className='src' src="images/homeIcon.svg" onClick={() => { setOpen(false) }} /> Home </Link><hr className='line-menu' />
                  <Link href={'/profile'} className='link-text'><img className='src' src="images/userIcon.svg" /> Profile </Link><hr className='line-menu' />
                  <Link href={'/orders'} className='link-text'><img className='src' src="images/ordersIcon.svg" /> Orders </Link><hr className='line-menu' />
                  {/* <Link href={'/offers'} className='link-text'><img className='src' src="images/offersIcon.svg" /> Offers </Link><hr className='line-menu' /> */}
                  <Link href={'/menu'} className='link-text'><img className='src' src="images/wishlistIcon.svg" /> Browse Menu </Link><hr className='line-menu' />
                  <Link href="" className='link-text'><img className='dark-mode src' src="images/darkmodeIcon.svg" /> Dark Mode </Link><hr className='line-menu' />
                  <AntSwitch  className='antswitch ' checked={switchState === 1} onChange={handleSwitchChange}/>
                  {/* <p>Switch State: {switchState}</p> */}
                  <Link href={'/help'} className='link-text'><img className='src' src="images/helpcenterIcon.svg" /> Help </Link><hr className='line-menu' />
                  <Link href={'/'} className='link-text'><img className='src' src="images/settings solid 1.svg" /> Settings </Link><hr className='line-menu' />
                
                </ul>
              </div>
            </div>
          </div>

          <div><img className="Logo" src="images/Logo.svg" alt="logo" /></div>
          <div className="search-bar">
            <div className="flex items-center gap-4">
              <img className="location-icon" src="images/Location.svg"></img>
              <span className="ellipsis location-text ">{address}</span>
              <img className="dropdown-arrow" id="this-button" src="images/dropdown-arrow.svg"></img>
            </div>
            <div className="flex items-center gap-4">
              <img className="divider" src="images/Divider.svg"></img>
              <img className="Search-icon" src="images/Search.svg"></img>
              <input className="placeholder" placeholder="Search for restaurants, or dishes......." />
              <img className="voice-search" src="images/Union.svg"></img>
            </div>

          </div>

          {/* <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29432.36014267771!2d75.92306705!3d22.76371055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d69bd0bc1c7%3A0x765af00fe6837137!2sNipania%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715368518977!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map Responsive"></iframe>
          </div> */}

          {/* {switchState && (
          <div>Dark mode enabled</div>
          )} */}
          
          {status === 'authenticated' && (
            <>
              <Link href={'/profile'} ><Button className="profile-button whitespace-nowrap">Hello, {userName}</Button></Link>
              <Button className="logout-button" onClick={() => signOut()}>Logout</Button>

              <Link href={'/cart'} className="cart-btn">
                <ShoppingCart />
                {cartProducts?.length > 0 && (
                  <span className="absolute px-1 py-1 text-xs leading-3 text-white rounded-full -top-2 -right-4 bg-primary">
                    {cartProducts.length}
                  </span>
                )}
              </Link>
            </>
          )}
          
          {status === 'unauthenticated' && (
            <>
              <Link href={'/register'} className="ml-6"><Button className="signup-button">Sign Up</Button></Link>
              <Link href={'/login'} className="ml-6"><Button className="login-button">Login</Button></Link>
            </>
          )}


        </div>

      </header>
    </>

  )
}

export function getSwitchState() {
  return switchState;
}

