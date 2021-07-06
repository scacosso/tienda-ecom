import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyA5AFrEDzAjl6ocDeqxh0fnt_43bTlPpS8",
  authDomain: "tienda-ecom-b1ad4.firebaseapp.com",
  projectId: "tienda-ecom-b1ad4",
  storageBucket: "tienda-ecom-b1ad4.appspot.com",
  messagingSenderId: "932567607462",
  appId: "1:932567607462:web:fcd768a9aa865bbd4eac67"
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
