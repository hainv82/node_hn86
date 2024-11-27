import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID
} = process.env

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};

let app
let firestoreDb

const initializeFirebase = () => {
    try {
        app = initializeApp(firebaseConfig)
        firestoreDb = getFirestore(app)
        console.log("---Firebase connected")
        return app
    } catch (error) {
        console.log("---Error connecting to Firebase", error)
    }
}
const uploadProcessData = async () => {
    const data = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    };

    try {
        // Reference to the document "LA" in the collection "cities"
        const docRef = doc(firestoreDb, 'cities', 'LA');

        // Add or overwrite the document with the data
        await setDoc(docRef, data);

        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};


const getFirebaseApp = () => app
export { initializeFirebase, getFirebaseApp, uploadProcessData, }
