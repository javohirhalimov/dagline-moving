import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
  const phoneNumber = "(201) 275-8281";
  const email = 'daglinemoving@gmail.com';


  const handleTextNow = () => {
    window.location.href = `sms:${phoneNumber.replace(/\D/g, "")}`;
  };

  const handleEmailNow = () => {
    window.location.href = `mailto:${email}`; // Opens the default email client with the specified address  
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`; // Removes non-numeric characters  
  };




  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeTextContactUs">Our Contacts</span>
          <span className="primaryTextContactUs">Easy to Contact Us</span>
          <span className="secondaryTextContactUs">
            Whether you have a question, feedback, or just want to say hello,
            we’re here for you!
          </span>

          <div className="flexColCenter contactModes">
            {/* First Row */}
            <div className="flexStart row">

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">(201) 275-8281</span>
                  </div>
                </div>

      
                <button  className="flexCenter button" onClick={handleCallNow}>Call Now</button>
           
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Text</span>
                    <span className="secondaryText">(201) 275-8281</span>
                  </div>
                </div>

     
                  <button className="flexCenter button" onClick={handleTextNow}>Text Now</button>
       
              </div>
            </div>

            {/* Second Row */}
            <div className="flexCenter row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">
                     daglinemoving@gmail.com
                    </span>
                  </div>
                </div>
               
                <button className="flexCenter button longer" onClick={handleEmailNow}>Email Now</button>
               
              </div>
            </div>

          </div>

          <div></div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./team_photo.jpg" alt="dagline-moving company team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
