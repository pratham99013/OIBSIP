// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlhnWEVFyud0Zmfe-ISGro-lomv-f3Fho",
  authDomain: "authapp-88829.firebaseapp.com",
  databaseURL: "https://authapp-88829-default-rtdb.firebaseio.com",
  projectId: "authapp-88829",
  storageBucket: "authapp-88829.appspot.com",
  messagingSenderId: "154267003546",
  appId: "1:154267003546:web:a315d0166473434f14cd23",
  measurementId: "G-VR163MP6HS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
const db = getDatabase();

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const cpassword=document.getElementById("cpassword");

function register() {
  const dbref = ref(db);

  if(email.value===""||password.value===""||cpassword.value==="")
  {
    alert("Any field cannot be empty");
    return;
  }
  if(password.value!=cpassword.value)
  {
  alert("Password and Confirmation password are not matching");
  return;
  }
 
  get(child(dbref, "users/" + email.value)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("User Already Exists");
    } else {
      set(ref(db, "users/" + email.value), {
        email: email.value,
        password: encrypt_password(),
      })
        .then(() => {
          alert("User registered succesfully");
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
}

submit.addEventListener("click",register)

function encrypt_password()
{
   let encrypted_password=CryptoJS.AES.encrypt(password.value,password.value);
   return encrypted_password.toString();
}


