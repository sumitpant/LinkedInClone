// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAvrv2h5KpjQCrluyYz_OBvBP5Dps1FXhc",
    authDomain: "linkedinclone-21787.firebaseapp.com",
    projectId: "linkedinclone-21787",
    storageBucket: "linkedinclone-21787.appspot.com",
    messagingSenderId: "384580702003",
    appId: "1:384580702003:web:89592f18ea7e21a7207846",
    measurementId: "G-62XEMVRVM5"
  };

  const firebasesApp=firebase.initializeApp(firebaseConfig);
  const db=firebasesApp.firestore();
  const auth=firebase.auth();


  export{db,auth};

