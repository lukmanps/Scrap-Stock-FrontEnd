// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from '../config/axios';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBnAp2XC3s2lJJ5pg-PSx5KeQxRd_PJRNU',
    authDomain: "scrap-stock.firebaseapp.com",
    projectId: "scrap-stock",
    storageBucket: "scrap-stock.appspot.com",
    messagingSenderId: '308138911283',
    appId:'1:308138911283:web:d48b4c3c3c93a776aa2546',
    measurementId: "G-CMSLNQ19D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result?.user;
                console.log(user?.displayName, user?.email)
                axios.post('/signin-with-google', user)
                    .then((response) => {
                        resolve(response?.data);
                    })
                    .catch((err)=>{
                        reject(err);
                    })
            })
            .catch((err) => {
                console.log(err, " :: ERROR in firebase");
            })
    })

}