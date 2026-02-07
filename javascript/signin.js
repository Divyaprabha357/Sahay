import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3uA91RM3XpGaD6nI9J9-vjLJTr9v_n7A",
    authDomain: "living-labs-hack.firebaseapp.com",
    projectId: "living-labs-hack",
    storageBucket: "living-labs-hack.firebasestorage.app",
    messagingSenderId: "721315419723",
    appId: "1:721315419723:web:5c06495ee913c9eb1ddfce",
    measurementId: "G-VHSERM637D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signIn = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "index.html"; 
        })
        .catch(error => {
            document.getElementById("error").innerText = error.message;
        });
};

window.signUp = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Account created successfully!");
        })
        .catch(error => {
            document.getElementById("error").innerText = error.message;
        });
};
