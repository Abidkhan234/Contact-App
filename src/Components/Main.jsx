import React, { useEffect, useRef, useState } from "react";
import TopPart from "./TopPart";
import SearchPart from "./SearchPart";
import ContactPart from "./ContactPart";
import ContactPart2 from "./ContactPart2";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../Config/Firebase/firebase";

const Main = () => {
  const [contacts, setContacts] = useState([]);

  const [filterValue, setFilterValue] = useState("");

  const showingData = () => {
    try {
      const contactsRef = collection(db, "Contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactsArr = snapshot.docs.map((v) => {
          return {
            id: v.id,
            ...v.data(),
          };
        });

        const trimmedFilterValue = filterValue.trim().toLowerCase();

        const filterValue2 = contactsArr.filter((v) => {
          if (filterValue === "") {
            return contactsArr;
          } else {
            return v.name.toLowerCase().includes(trimmedFilterValue);
          }
        });

        setContacts(filterValue2);
        return filterValue2;
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showingData();
  }, []);

  return (
    <div className="h-full max-h-[450px] w-full max-w-[430px]  p-3 bg-gray-600 rounded-sm flex flex-col gap-4 relative">
      <TopPart />

      <SearchPart
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        showingData={showingData}
      />

      {contacts.length <= 0 ? (
        <div className="flex justify-center items-center h-full">
          <ContactPart />
        </div>
      ) : (
        <ContactPart2 contacts={contacts} />
      )}
    </div>
  );
};

export default Main;
