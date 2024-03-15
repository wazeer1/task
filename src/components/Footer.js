import React from "react";

const Footer = () => {
  return (
    <div className="py-20">
      <h3 className="text-4xl text-center">Interested in delving deeper into the project?</h3>
      <div className="px-8">
        <p className="text-center px-8 mt-8">
          If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate
          to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.
        </p>
      </div>
      <div className="px-5 space-x-8 flex mt-10">
        <button className="py-2 w-1/2 border border-white">Ring us on Skype</button>
        <button className="py-2 w-1/2 border bg-white text-black">Contact Us</button>
      </div>
    </div>
  );
};

export default Footer;
