
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: 'AIzaSyDNAdH59OTSzM_DIO_m8F9vrMqqab8x6go',
    authDomain: 'belegic-ebc08.firebaseapp.com',
    databaseURL: 'https://belegic-ebc08.firebaseio.com',
    projectId: 'belegic-ebc08',
    storageBucket: 'belegic-ebc08.appspot.com',
    messagingSenderId: '106678788830',
    appId: '1:106678788830:web:b062994b303a483f8cd84f'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };