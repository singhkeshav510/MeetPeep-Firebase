import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD-02OzSgSg8oIpdq2-aT3OAEAfBGG8vbQ",
  authDomain: "meetpeep-app.firebaseapp.com",
  databaseURL: "https://meetpeep-app.firebaseio.com",
  projectId: "meetpeep-app",
  storageBucket: "meetpeep-app.appspot.com",
  messagingSenderId: "575383442949",
  appId: "1:575383442949:web:4773c912797bda78fe6e6c",
  measurementId: "G-862K4WNN5D",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
