import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgqPvl3z_NVwhXVe0dVvMQskvAqnBcM9g",
  authDomain: "bse6fa24.firebaseapp.com",
  databaseURL: "https://bse6fa24-default-rtdb.firebaseio.com",
  projectId: "bse6fa24",
  storageBucket: "bse6fa24.firebasestorage.app",
  messagingSenderId: "215333876129",
  appId: "1:215333876129:web:cd9161f263883979a69be0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export { db, auth };
