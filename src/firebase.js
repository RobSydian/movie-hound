import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

/**
 * 
 * {"uid":"fAI5Hj0I9CRHJ3IGVHO66c0uxem1","email":"rertus@hotmail.com","emailVerified":false,"isAnonymous":false,"providerData":[{"providerId":"password","uid":"rertus@hotmail.com","displayName":null,"email":"rertus@hotmail.com","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"AOEOulYL3TAe9AKLMh7t8oTscP8WVgGk4H46o_2wU7sc_Q5IQBv__S-lAk7GTnGNKHCbX0vVHNPX_G38lBcJ7sFmlP_22eg9Okm6qANb009CbfGbjadq2mcdbNIt9mqlSlTji5GNAApVUt3mlZj66M5MrxDRdHh4WQFoDVuWCNNg68vSzbC_hq06AUiLASmmMXUGPDUlFhJQ-TQbSvEzk25GsQEq5fN9QA","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImJmMWMyNzQzYTJhZmY3YmZmZDBmODRhODY0ZTljMjc4ZjMxYmM2NTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbW92aWUtaG91bmQtZGIiLCJhdWQiOiJtb3ZpZS1ob3VuZC1kYiIsImF1dGhfdGltZSI6MTY1ODMxNTAyMywidXNlcl9pZCI6ImZBSTVIajBJOUNSSEozSUdWSE82NmMwdXhlbTEiLCJzdWIiOiJmQUk1SGowSTlDUkhKM0lHVkhPNjZjMHV4ZW0xIiwiaWF0IjoxNjU4MzE1MDIzLCJleHAiOjE2NTgzMTg2MjMsImVtYWlsIjoicmVydHVzQGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJlcnR1c0Bob3RtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CkFoOzZW3EyudWzMYN-KBK9ohpH2VN6VmMwi5bCRIljiP-p0BwmkVE5BfN7WBnfDTruJ7PEzAvTZ4ZK9-9Qi-PsIENKmSxA9TrHY2zyZAzi0RTW8WaFXYiqlRe4eWu5ABLkWYdtblbmPl9ufcPv3JQEeJxLRcCYSNTjnO5o1IhlIxm2Xo-aePUyFxen0FgAerOct-_Uxtyhe46bNmAX_N7YJLZH_WoWKpoCQIV9oCFN4sBaVHYdAvu-2inVkdL49uEW2lHjdKsjg4K4tqJTTKvJeA9c6b8JBXNyFrKQGBRq6F7x68QIj2abW2NxS5N9hkMLBdQ8dqFZKfjfXco0DLg","expirationTime":1658318623787},"createdAt":"1658315023473","lastLoginAt":"1658315023473","apiKey":"AIzaSyDVhzBOrqUUQcvKlTYYYLq7Kbw7eTXBP4I","appName":"[DEFAULT]"}

 * 
 */
