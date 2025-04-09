import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modals/Modal";

const SearchPart = ({ filterValue, setFilterValue, showingData }) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div>
      {toggleModal && (
        <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} />
      )}
      <div className="flex justify-between items-center flex-wrap">
        <div className="border-2 border-white flex gap-2.5 rounded-md items-center px-2">
          <span className="text-2xl text-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="py-1 outline-none text-lg font-medium text-white"
            placeholder="Search Name."
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
              showingData(e.target.value);
            }}
          />
        </div>
        <div className="">
          <button
            onClick={() => setToggleModal(!toggleModal)}
            className="w-10 h-10 text-2xl font-medium bg-white cursor-pointer flex justify-center items-center rounded-full"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPart;
