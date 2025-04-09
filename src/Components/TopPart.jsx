import React from "react";

const TopPart = () => {
  return (
    <div>
      <div className="flex gap-1 items-center bg-white rounded-md justify-center py-2">
        <div className="">
          <img
            src="public\Images\logos_firebase.svg"
            className="w-8 h-8"
            alt=""
          />
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">Firebase Contact App</h2>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
