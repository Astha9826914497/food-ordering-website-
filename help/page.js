"use client";

import React, { useState } from 'react';
import './page.css';
import Link from "next/link";
import { Button } from "@mui/material";
import Footer from "../../components/footer/footer";

// Accordion component
function Accordion({ question, answer }) {
  // State to track the active state of each accordion item
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state of accordion items
  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
      <div className="accordion__question">{question}</div>
      <div className="accordion__answer">{answer}</div>
    </div>
  );
}

const help = () => {

  return (
    <div className='light-theme'>
      <div className='help'>
        <div className="heading-help">General issues</div>
        <div className="sub-heading-help">Our support team is just a click away - ready to assist you</div>

        <div className='container'>
          {/* Accordion items */}
          <Accordion
            question="What is FoodsterGo Customer Care Number?"
            answer="We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly."
          />
          
          <Accordion
            question="I am unable to find the restaurant I'm looking for"
            answer="The restaurant might either be closed at the moment or temporarily not serviceable due to the low rider availability near the restaurant. Please try again after some time or consider ordering from a different restauraunt."
          />
          <Accordion
            question="I see surge fees on app"
            answer="Non-FoodsterGo one customer: Surge fee is generally enabled temporarily due to higher than expected demand to help us to fairly compensate the delivery executive. Explore our FoodsterGo one feature which eliminates surge fee along with other benefits. If you have any accordion__question please feel free to drop a note at 'support@FoodsterGo.in'"
          />
          <Accordion
            question="I am unable to place a cash on delivery order"
            answer="COD option may not be available due to below reasons:
                                - High value order
                                - If order is placed from a desktop application
                                - Any recent history of cancelling a COD order
                               In case if your reason is not listed here, Please write to us at support@FoodsterGo.in"
          />
          <Accordion
            question="I did not receive my OTP on SMS"
            answer="If you're not receiving the OTP, it's usually due to a network issue. Please check your mobile network settings and try generating a new OTP. If the problem persists, you might want to restart your device or reach out to us at support@FoodsterGo.in for assistance."
          />
          <Accordion
            question="My payment was deducted but the order was not processed"
            answer="If your payment has been deducted, it will be refunded to the source account 
                                 1. UPI (2 hours)
                                 2. Credit Card (4-7 days)
                                 3. Debit Card (4-7 days)
                                 4. Net Banking (4-7 days)
                                 In case you have not received the refund within the above timelines please reach out to us at support@FoodsterGo.in"
          />
          <Accordion
            question="I want to unsubscribe from FoodsterGo communications"
            answer="Please drop us an email mentioning the channels you would like to be unsubscribed from. We will take an action and confirm within 24-48 hours"
          />
          <Accordion
            question="I was charged a cancellation fees"
            answer="A cancellation fee is applicable if you request cancellation after 1 minute of placing the order. For more information, choose the relevant order in the 'My Account' section, proceed to 'HELP,' and select 'I have a payment and bill-related query.' Our support agent will be available to assist you."
          />
          <Accordion
            question="I have a query/issue regarding the bill amount"
            answer="Kindly send us an email at support@FoodsterGo.in with the following information:
                                - Attach a screenshot of the bill, indicating the issue
                                - Include the Order ID (if applicable)
                                - Specify the item price and any extra charges
                                - Provide a description of the problem you're encountering"
          />
          <Accordion
            question="I want an invoice for my order"
            answer="To receive the order invoice via email, follow these steps:
                            - Navigate to 'My Account' and then select the order for which you need an invoice
                            - Click on 'HELP' and choose 'I have payment and bill related queries for this order' and then select 'I want an invoice for this order' to initiate the request
                            - You'll receive the invoice within 24 hours on your registered email address"
          />  
           </div>
           <div>
           <Footer/>
           </div>
      </div>
    </div>
  )
}

export default help;
