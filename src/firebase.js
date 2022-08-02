import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = app.auth();

export default app;

//init services
export const db = getFirestore(app);

//collection ref
export const usersColRef = collection(db, 'users');

export const getUsersFavList = async () => {
  const myListCol = doc(db, 'users', `${auth.currentUser.uid}`);
  const listSnapshot = await getDoc(myListCol);

  if (listSnapshot.data()) {
    const resultList = await listSnapshot.data()['userList'];
    return resultList;
  }
};
//get collection data
// getDocs(usersColRef)
//   .then((snapshot) => {
//     let users = [];
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(users);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
