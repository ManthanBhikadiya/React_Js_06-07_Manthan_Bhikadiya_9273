import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import Header from "../components/Header";
import DataForm from "../components/DataForm";
import DataList from "../components/DataList";

const Home = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const collectionRef = collection(db, "tasks");

  // 🔥 REAL-TIME DATA FROM FIREBASE
  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(items);
    });

    return () => unsubscribe();
  }, []);

  // ➕ CREATE
  const addData = async (item) => {
    try {
      await addDoc(collectionRef, {
        ...item,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log("Add Error:", error);
    }
  };

  // ❌ DELETE
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  // ✏️ UPDATE
  const updateData = async (id, updatedItem) => {
    try {
      await updateDoc(doc(db, "tasks", id), {
        ...updatedItem,
        updatedAt: serverTimestamp(),
      });
      setEditItem(null);
    } catch (error) {
      console.log("Update Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <DataForm
        addData={addData}
        editItem={editItem}
        updateData={updateData}
      />

      <DataList
        data={data}
        deleteData={deleteData}
        setEditItem={setEditItem}
      />
    </div>
  );
};

export default Home;