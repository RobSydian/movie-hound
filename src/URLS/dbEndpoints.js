// import { doc, getDoc } from 'firebase/firestore';
// import { auth, db } from '../firebase';

export const dbBaseUrl =
  'https://movie-hound-db-default-rtdb.europe-west1.firebasedatabase.app/';

// export const getUsersFavList = async () => {
//   console.log(auth.currentUser);
//   if (auth.currentUser) {
//     const myListCol = doc(db, 'users', `${auth.currentUser.uid}`);
//     const listSnapshot = await getDoc(myListCol);

//     if (listSnapshot.data()) {
//       const resultList = await listSnapshot.data()['userList'];
//       return resultList;
//     }
//   }
// };
