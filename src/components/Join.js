import React, { useRef } from "react";
import "../style/Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    // const formRef = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
    //         publicKey: 'YOUR_PUBLIC_KEY',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };

  return (
    <div className="join">
      <div className="join-left">
        <hr />
        <div>
          <span className="stroke-text">ready to </span>
          <span>leave up</span>
        </div>
        <div>
          <span>your body </span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="join-right">
        <form action="https://formspree.io/f/xqaznlgj" className="email-container" method="POST">
            <input type="email" name="email" placeholder="Enter your email address"/>
            <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
