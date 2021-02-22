import firebase from "firebase";

const config = {
      "apiKey":"AIzaSyDBo5gJ7GkaztJYpVTJEUmgPQMJU5N_eo8",
      "authDomain":"grob0t-628ae.firebaseapp.com",
      "databaseURL":"https://3o.firebaseio.com",
      "projectId":"grob0t",
      "storageBucket":"grob0t.appspot.com",
      "messagingSenderId":"767266837467",
      "appId":"1:767266837467:web:69735ae17ab6a14a0f8dfe",
      "measurementId":"G-KTMXYYFRQ7"
   }

//if (!firebase.apps.length) {
  firebase.initializeApp(config);
//}

export default firebase;
