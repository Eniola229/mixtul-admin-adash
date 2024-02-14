
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCoJYvL2KVHN4_X-nGXYkRz-bEWvENPMEU",
  authDomain: "mixtul-1a706.firebaseapp.com",
  projectId: "mixtul-1a706",
  storageBucket: "mixtul-1a706.appspot.com",
  messagingSenderId: "805253885399",
  appId: "1:805253885399:web:3668d0ab4dee3519d86f92"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export { provider };

export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
