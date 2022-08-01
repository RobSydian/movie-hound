import { createContext, useContext, useEffect, useState } from 'react';
// import { Auth } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setDoc(doc(db, 'users', auth.currentUser.uid), {
          email,
          password,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    currentUser
      .updateEmail(email)
      .then((res) => {
        console.log(res);
        updateDoc(doc(db, 'users', auth.currentUser.uid), {
          email,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function updatePassword(password) {
    return currentUser
      .updatePassword(password)
      .then((res) => {
        console.log(res);
        updateDoc(doc(db, 'users', auth.currentUser.uid), {
          password,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
