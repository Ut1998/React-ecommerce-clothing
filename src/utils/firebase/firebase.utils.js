import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP-GO8w9rH5IakfBaqhf6ufYtf3ckzysY",
  authDomain: "ecommerce-clothing-db-7f5cd.firebaseapp.com",
  projectId: "ecommerce-clothing-db-7f5cd",
  storageBucket: "ecommerce-clothing-db-7f5cd.appspot.com",
  messagingSenderId: "240708563322",
  appId: "1:240708563322:web:7aa406f51d2c2f002a26c3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const fireStoredb = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(fireStoredb, "users", userAuth.uid);
  console.log(userDocRef);

  const userSanpshot = await getDoc(userDocRef);
  console.log(userSanpshot);
  console.log(userSanpshot.exists());

  if (!userSanpshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error is there", error.message);
    }
  }

  return userDocRef;
};
