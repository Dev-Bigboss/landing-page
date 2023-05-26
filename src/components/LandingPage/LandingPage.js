import React, { useState } from 'react';
import Logo from '../../assets/logo2.png';
import { FaArrowRight } from 'react-icons/fa';
import image1 from '../../assets/flag.png';
import image2 from '../../assets/flag1.png';
import image3 from '../../assets/flag2.png';
import Big from '../../assets/Big.png';
import Small from '../../assets/Small.png';

import scatt1 from '../../assets/screennn.png';

import Frame1 from '../../assets/Frame1.png';
import Frame2 from '../../assets/Frame2.png';
import Frame3 from '../../assets/Frame3.png';
import Vector1 from '../../assets/Vector1.png';
import main1 from '../../assets/sennder.png';

import Arrow15 from '../../assets/Arrow15.png';
import hand from '../../assets/hand.png';
import Frame4 from '../../assets/Frame4.png';
import Frame5 from '../../assets/Frame5.png';
import Frame6 from '../../assets/Frame6.png';
import Frame7 from '../../assets/Frame7.png';
import rectangle1 from '../../assets/rectangle1.png';
import rectangle2 from '../../assets/rectangle2.png';
import rectangle3 from '../../assets/rectangle3.png';
import Payceler1 from '../../assets/Payceler1.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import { useNavigate } from 'react-router-dom';






import './landingPage.css';
const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <div className='big-container'>
<header className="lander sticky top-0">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img className="h-8 logo" src={Logo} alt="Payceler" />
        </div>
        <div id="menuToggle" className="hidden md:block " onClick={handleMenuToggle}>
          <input type="checkbox" className="hidden" checked={menuVisible} readOnly />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={`hidden md:flex items-center space-x-6 ${menuVisible ? 'block' : 'hidden'}`}>
            <li><a href="/aboutUs" className="banks">About us</a></li>
            <li><a href="/pricing" className="banks">Pricing</a></li>
            <li><a href="/contactUs" className="banks">Contact us</a></li>
            <li><a href="/helpCenter" className="banks">Help center</a></li>
          </ul>
        </div>
        <button onClick={handleSignInClick} className="signin rounded-lg px-4 py-2">Sign In</button>
      </nav>
    </header>
    <section className="container mx-auto flex items-center justify-between py-4 section1">
    <div className='content-wrapper'>

      <div className="flex text-container1">

      <div className="">
  <div className="flex flex-col lg:flex-row">
    <h2 className="text1">Digitize your financial</h2>
    <div>
      <h2 className="text2">Open a global bank account for free to receive and make foreign payments or convert currencies, all in one place.</h2>
      <button onClick={handleRegisterClick} className="flex items-center button1">
        Register Now<FaArrowRight className="ml-2 icon1" />
      </button>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row justify-between paragraph1">
  
    <div>
      <p className="paragraph">Make payment with</p>
      <div className="flex items-center mt-0 images1">
        <img src={image1} alt="flag1" className="flag1" />
        <img src={image2} alt="flag2" className="flag2" />
        <img src={image3} alt="flag3" className="flag3" />
      </div>
    </div>
    <div className="image-container">
      <div className="relative">
        <img src={Big} alt="Main" className="w-auto h-8 mr-2" />
        <img src={Small} alt="Small" className="absolute w-4 h-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 small" />
      </div>
      <div>
        <p className='paragraph2'>Best Digital Agency</p>
        <p className='paragraph3'>Seamless transactions</p>
      </div>
    </div>
  </div>
  

  <div className="image-container2 ">
  <img src={scatt1} alt="scatt1" className="scatt1 w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
</div>


    </div>
      </div>
      </div>
    </section>
<section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 section2">
<div className="flex flex-col md:flex-row items-center md:items-start">
<div className="w-full  pr-0 md:pr-9">
      <div className="text-container2 mb-6 md:mb-0">
     <p> Making <span className='smart'>Smart Moves</span> with payceler</p>
      </div>
      <div className="image-column flex flex-wrap justify-center">
  <img src={Frame1} alt="Frame1" className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
  <img src={Frame2} alt="Frame2" className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
  <img src={Frame3} alt="Frame3" className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
</div>

<section className='container '>
  
<div className='flex container3 relative justify-center'>
  <p className="flex items-center button2">Features 😍</p>
  <p className="send ">Send money <span className="smart">cheaper</span> and <span className="smart">easier</span> than old-school banks.</p>
</div>
</section>

<div className="flex flex-col lg:flex-row mx-auto items-center justify-between container4">
  <div className="w-full md:w-1/2 pr-9">
    <div className="listt  md:ml-0">
      <img src={Vector1} alt="Vector1" className="vector1" />
      <p className="goat ">Pay at the real exchange rate</p>
    </div>
    <p className="goat1">Avoid sneaky bank exchange rate markups and high foreign transaction fees. Pay only a low upfront conversion fee, and no annual card fee.</p>

    <div className="listt container5 ">
      <img src={Vector1} alt="Vector1" className="vector1" />
      <p className="goat ">Convert your money in seconds</p>
    </div>
    <p className="goat1">Receive payments from anywhere, and convert them to 54 currencies. You’ll always get the real exchange rate, and the low fees we’re known for.</p>

    <div className="listt container5">
      <img src={Vector1} alt="Vector1" className="vector1" />
      <p className="goat text-center md:text-left">Manage your earnings</p>
    </div>
    <p className="goat1">Use your account details to receive and manage your earnings. Invoice like a local and manage your earning from various online platforms and storefronts.</p>
  </div>

  <div className="w-full md:w-1/2 pl-20 relative image-container3">
    <div className="">
      <div className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
      <img src={main1} alt="main1" className="main1" />
    </div>
  </div>
</div>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className='w-full pr-9'>
      <div className='flex mx-auto items-center justify-between container6 hello'>
        <div className="flex textt-container2 "><p className=''>
        3 Easy Steps to <span className='smart'>Open Our Free Foreign</span> Bank Account</p>
        </div>
        
      </div>
      <div className="w-full md:w-1/2 pr-9">
          <div className='box'>
            <p className='box1'>Click on the register button</p>
            <p className='box2'>Sign up with your E-mail address</p>
          </div>
          <img src={Arrow15} alt="Arrow15" className="arrow15" />
          <div className='box'>
            <p className='box3'>Complete KYC verification</p>
            <p className='box5'>Verify with your government-issued ID</p>
          </div>
          <img src={Arrow15} alt="Arrow15" className="arrow15" />
          <div className='box'>
            <p className='box4'>Hurray, you're in!</p>
            <p className='box2'>Sign up with your E-mail address</p>
          </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 pl-20 relativeflex items-center justify-flex-end flex-col'>
        <button onClick={handleRegisterClick} className="flex flex-row  button1 pineapple">
            Register Now<FaArrowRight className="ml-2 icon1" />
         </button>
    <div className="">
      <div className="" />
            <img src={hand} alt='hand' className='main1' />
    </div>
  </div>

        </div>
        </div>
        </div>

    </section>
    <section className='container section3'>
    <div className='flex container6 relative justify-center'>
        <p className="flex items-center button3">Our Services 😍</p>
        <p className="send1">We build <span className='smart'>usable, simple</span> and <span className='smart'>functional</span> product.</p>
      </div>
      <div className="image-column flex flex-wrap justify-center">
        <img src={Frame4} alt="Frame4" className="Frame4 w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
        <img src={Frame5} alt="Frame5" className="Frame4 w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
        <img src={Frame6} alt="Frame6" className="Frame4 w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
        <img src={Frame7} alt="Frame7" className="Frame4 w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
      </div>
      <div className='flex justify-center'>
        
      <button className="flex items-center button1 pineapple">
              Contact us<FaArrowRight className="ml-2 icon1" />
      </button>
      </div>
    </section>
    <section className='container section4'>
    <div className="flex text-container2 mb-6 md:mb-0"><p>
      Building our<span className='smart'> expertise, for you</span></p>
      </div>
      <div className='image-column flex flex-wrap justify-center'>
      <img src={rectangle1} alt="rectangle1" className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
      <img src={rectangle2} alt="rectangle2" className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
      <img src={rectangle3} alt="rectangle3" className="Frame w-full lg:w-auto h-auto lg:h-full mx-2 my-2" />
      </div>
    </section>
    <footer className='container section5'>
      <div className='flex justify-center footer-columns'>
        <div className='footer-column1'>
          <img src={Payceler1} alt="Payceler" className='logo' />
          <p className='footer-paragraph1'>Payceler is a A digital solution agency that provide financial transactions through seamless expereience, fast and secured platform</p>
        </div>
        <div className='footer-column2'>
          <p className='footer-paragraph2'>Company</p>
          <p className='footer-paragraph3'>About us</p>
          <p className='footer-paragraph3'>Pricing</p>
          </div>
        <div className='footer-column3'>
          <p className='footer-paragraph2'>Support</p>
          <p className='footer-paragraph3'>FAQ</p>
          <p className='footer-paragraph3'>Terms of Use</p>
          <p className='footer-paragraph3'>Privacy Policy</p>
          </div>
        <div className='footer-column4'>
          <p className='footer-paragraph2'>Contact Us</p>
          <p className='footer-paragraph3'>support@Payceler.com</p>
          <p className='footer-paragraph3'>+234 - 804 - ***35 - 8222</p>   
          <p className='footer-paragraph3'>13, Femi Aderibigbe Close Ifako, Gbagada Lagos.</p> 
          <div className='flex  socials'>
          <img src={facebook} alt="facebook" className='facebook' />
          <img src={twitter} alt="twitter" className='facebook' />
          <div className='instagram'>
          <img src={instagram} alt="instagram" className='insta' />
          </div>
          </div>
        </div>
        </div>
        <hr className='footer-line' />
          <p className='courtesy'>© Payceler-2021 All Rights Reserved.</p>
          
    </footer>
    </div>
    );
};

export default LandingPage;
