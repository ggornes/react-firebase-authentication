// import * as Firebase from "firebase";
import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };


class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }
}

export default Firebase;