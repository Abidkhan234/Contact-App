import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import UpdateModal from "./Modals/UpdateModal";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Config/Firebase/firebase";

const ContactPart2 = ({ contacts }) => {
  const [updateToggleModal, setUpdateToggleModal] = useState(false);

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const [uid, setUid] = useState("");

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Contacts", id));
  };

  const handleEdit = (id) => {
    const arr = contacts.filter((v) => v.id === id);

    setValue(arr[0].name);

    setValue2(arr[0].email);
  };

  return (
    <div className="flex flex-col gap-4 overflow-y-auto justify-center px-1">
      {updateToggleModal && (
        <UpdateModal
          updateToggleModal={updateToggleModal}
          setupdateToggleModal={setUpdateToggleModal}
          uid={uid}
          setUid={setUid}
          contacts={contacts}
          value={value}
          setValue={setValue}
          value2={value2}
          setValue2={setValue2}
        />
      )}

      {contacts.map((v) => {
        return (
          <div
            key={v.id}
            className="bg-[#FFEAAE] rounded-md py-3 px-2.5 flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <span className="text-[#F6820C] text-4xl">
                <VscAccount />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{v.name}</h3>
                <p className="text-sm font-medium">{v.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setUpdateToggleModal(!updateToggleModal);
                  setUid(v.id);
                  handleEdit(v.id);
                }}
                className="text-2xl font-bold cursor-pointer shrink-0"
              >
                <RiEditCircleLine />
              </button>
              <button
                onClick={() => {
                  handleDelete(v.id);
                }}
                className="text-2xl cursor-pointer text-[#5F00D9]"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPart2;
