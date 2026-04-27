import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGjFEsznXc9dHELTQemDLqLVHUCXsEZ6A",
  authDomain: "formacion-vial-extreme.firebaseapp.com",
  databaseURL: "https://formacion-vial-extreme-default-rtdb.firebaseio.com",
  projectId: "formacion-vial-extreme",
  storageBucket: "formacion-vial-extreme.firebasestorage.app",
  messagingSenderId: "193633981061",
  appId: "1:193633981061:web:2183ace781aa33b99a0fec"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
