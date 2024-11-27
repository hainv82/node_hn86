// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPjCNVjjek6n1nvjEgNzx0s-fSYvDS9v4",
    authDomain: "findu-ea407.firebaseapp.com",
    projectId: "findu-ea407",
    storageBucket: "findu-ea407.appspot.com",
    messagingSenderId: "529860671893",
    appId: "1:529860671893:web:e6bc65cd1233891dfd9e9c",
    measurementId: "G-S2S98HNKSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to add or overwrite a document
const addOrUpdateDocument = async () => {
    const data = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    };

    try {
        // Reference to the document "LA" in the collection "cities"
        const docRef = doc(db, 'cities', 'LA');

        // Add or overwrite the document with the data
        await setDoc(docRef, data);

        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};

// Run the function
addOrUpdateDocument();
