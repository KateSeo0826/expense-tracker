import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCNCWhm39vHU9gCzmkfCbBaSlArALIERfE",
    authDomain: "money-tracker-855ec.firebaseapp.com",
    projectId: "money-tracker-855ec",
    storageBucket: "money-tracker-855ec.appspot.com",
    messagingSenderId: "958962471209",
    appId: "1:958962471209:web:73e8b6920cb18fe2bce738"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }