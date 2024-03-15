import React from "react";

const Contributer = () => {
  return (
    <div className="py-10">
      <h3 className="text-4xl text-center">Our Contribution</h3>
      <p className="text-center mt-4">
        Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our
        user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication
        to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
      </p>
      <div className="py-8 flex justify-between">
        <div className="w-1/4 text-center">
          <h4 className="text-8xl ">5M</h4>
          <h6 className="">
            Daily User
            <br /> Engagements
          </h6>
        </div>
        <div className="w-1/4 text-center">
          <h4 className="text-8xl ">$500K</h4>
          <h6 className="">
            Revenue Surge for an <br />
            Platform
          </h6>
        </div>
        <div className="w-1/4 text-center">
          <h4 className="text-8xl ">10X</h4>
          <h6 className="">ROAS on all our<br/> marketing campaigns</h6>
        </div>
      </div>
    </div>
  );
};

export default Contributer;
