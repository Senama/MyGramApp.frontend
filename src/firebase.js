import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAesRf2SwPlEKTePL3K4-QkC9r9B0LzYTE",
    authDomain: "dom-uploader-f52df.firebaseapp.com",
    databaseURL: "https://dom-uploader-f52df.firebaseio.com",
    projectId: "dom-uploader-f52df",
    storageBucket: "dom-uploader-f52df.appspot.com",
    messagingSenderId: "223500732811"
};

app.initializeApp(config);

export default app;