import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";

const productColletion = collection(db , "products")

export const fetchProductsAPI = async () => {
    
    const snapshot = await getDocs(productColletion);
    
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log(`✅ Fetched ${products.length} products:`, products);
    return products;
};

// ✅ ADD with error handling
export const addProductAPI = async (product) => {
  try {
    console.log("Adding product:", product);
    
    // Validate
    if (!product.name || !product.price) {
      throw new Error("Product name and price are required!");
    }
    

    const docRef = await addDoc(productColletion, product);
    
    console.log("✅ Product added with ID:", docRef.id);
    
    return {
      id: docRef.id,
      ...product
    };
    
  } catch (error) {
    console.error("❌ Add Error:", error);
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    
    // Check for permission error
    if (error.code === "permission-denied") {
      console.error("🔒 PERMISSION DENIED!");
      console.error("Fix: Go to Firestore Rules and set:");
      console.error("allow read, write: if true;");
    }
    
    throw error;
  }
};

// ✅ DELETE with error handling
export const deleteProductAPI = async (id) => {
  try {
    console.log("🗑️ Deleting product:", id);
    
    await deleteDoc(doc(db, "products", id));
    
    console.log("✅ Product deleted");
    return id;
    
  } catch (error) {
    console.error("❌ Delete Error:", error);
    throw error;
  }
};

// ✅ UPDATE with error handling
export const updateProductAPI = async ({ id, data }) => {
  try {
    console.log("✏️ Updating product:", id, data);
    
    const productRef = doc(db, "products", id);
    await updateDoc(productRef, data);
    
    console.log("✅ Product updated");
    return { id, data };
    
  } catch (error) {
    console.error("❌ Update Error:", error);
    throw error;
  }
};