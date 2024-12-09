// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc,collection,getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDvtykgsCRlqPt7dFF7kdwI1slT360VFAI",
  authDomain: "netflix-clone-79ab7.firebaseapp.com",
  projectId: "netflix-clone-79ab7",
  storageBucket: "netflix-clone-79ab7.firebasestorage.app",
  messagingSenderId: "339592097979",
  appId: "1:339592097979:web:d643396568d1a5cdd2799e",
  measurementId: "G-Q4KCH2FBEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

const db=getFirestore(app)

const signup = async (name,email,password)=>{
  try{
   const res = await createUserWithEmailAndPassword(auth,email,password)
   const user=res.user
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authprovider:"locak",
    email,
   })
  }catch(error){
    console.log(error)
    alert(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async(email,password)=>{
  try {
    const res = await signInWithEmailAndPassword(auth,email,password)
    
  } catch (error) {
    console.log(error);
    alert(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))

    
    
  }
}

const logout=()=>{
  signOut(auth)
}

export {auth,db,login,signup,logout}