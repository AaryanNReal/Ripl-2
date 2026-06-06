import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-28ehN-w8RTQHfua4sqivnNOg-9KLK3o",
  authDomain: "ripl-eab5f.firebaseapp.com",
  projectId: "ripl-eab5f",
  storageBucket: "ripl-eab5f.firebasestorage.app",
  messagingSenderId: "731079151622",
  appId: "1:731079151622:web:699b0e17765498b3807387",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;