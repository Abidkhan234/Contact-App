import React from "react";

const ContactPart = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <div className="shrink-0">
          <img
            src="public\Images\Hands Contact.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="">
          <h2 className="font-bold sm:text-2xl text-xl text-white text-nowrap">
            No Contact Found
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactPart;
