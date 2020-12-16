import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6ElEredMs43ot_Y50oz7b3eCH1LBMpdI",
  authDomain: "tinder-jd.firebaseapp.com",
  databaseURL: "https:tinder-jd.firebaseio.com",
  projectId: "tinder-jd",
  storageBucket: "tinder-jd.appspot.com",
  messagingSenderId: "229178424786",
  appId: "1:229178424786:web:d303cd097cb05a8818dc0b",
  measurementId: "G-H836R097DT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
