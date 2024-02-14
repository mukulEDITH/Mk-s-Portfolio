import React, { useContext, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";

import StyleContext from "../../contexts/StyleContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const form = useRef();
 


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r30iqfb', 'template_mmq0bk2', form.current, {
        publicKey: 'on8BNR1FzauAZQ7DI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: 'Success!',
            text: 'You have successfully submmited the form.',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
             
      );form.current.reset(); 
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div class="cform">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name" id="name" />
                <input type="email" name="user_email" placeholder="Email id" id="email" />
                <input name="message" placeholder="Message" id="message" />
                <input className ="sendbtn" type="submit" value="Send" />
              </form>
            </div>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">

            <img
              alt="Man working"
              src={require("../../assets/images/Image_20240109_113339_516.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
