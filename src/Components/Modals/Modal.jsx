import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase/firebase";

const Modal = ({ toggleModal, setToggleModal }) => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleAdd = async () => {
    if (value === "" || value2 === "") {
      alert("All fields are mandatory.");
      return;
    } else if (!emailRegex.test(value2)) {
      alert("Invalid email format.");
      return;
    } else {
      try {
        const docRef = await addDoc(collection(db, "Contacts"), {
          name: value,
          email: value2,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    setToggleModal(!toggleModal);
  };

  return (
    <div>
      <div className="bg-black opacity-50 pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-40"></div>
      <div className="w-full max-w-[400px] py-5 px-4 flex flex-col gap-6 rounded-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-50 overflow-hidden">
        <div
          onClick={() => setToggleModal(!toggleModal)}
          className="absolute top-0 right-0 text-2xl p-1 cursor-pointer bg-red-500 text-white rounded-bl-sm"
        >
          <RxCross1 />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Name" className="font-medium text-lg ms-1">
            Enter Name:
          </label>
          <input
            type="text"
            id="Name"
            value={value}
            className="w-full rounded-sm py-1 px-2 text-lg font-medium border-2"
            placeholder="Enter Name."
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-lg ms-1">
            Enter Email:
          </label>
          <input
            type="email"
            id="email"
            value={value2}
            className="w-full rounded-sm py-1 px-2 text-lg font-medium border-2"
            placeholder="Enter Email."
            autoComplete="off"
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-end items-center">
          <button
            onClick={() => {
              handleAdd();
            }}
            className="bg-[#F6820C] text-white py-1 px-4 rounded-sm font-medium text-lg cursor-pointer"
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
