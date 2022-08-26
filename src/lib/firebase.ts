// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/*import { 
  getFirestore, collection, getDocs
} from "firebase/firestore";
*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyArhC3Ga8XPcd9_H85_Ggu9knk6CQ6Hw",
  authDomain: "apollo-site-e1dc0.firebaseapp.com",
  projectId: "apollo-site-e1dc0",
  storageBucket: "apollo-site-e1dc0.appspot.com",
  messagingSenderId: "714897627058",
  appId: "1:714897627058:web:248c202095c84110faf6ab",
  measurementId: "G-N4LGHM1GPH"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

/*
const db = getFirestore();

const colRef = collection(db, "tests");

getDocs(colRef)
  .then((snapshot) => {
    console.log("holi")
    const tests:any = [];
    snapshot.docs.forEach((doc) => {
      tests.push({ ...doc.data(), id: doc.id})
    })
    console.log(tests)
  })
  .catch(error => {
    console.log(error)
  })
*/