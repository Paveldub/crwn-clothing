import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCBWhbwzQqOz3hiYxSTEwQJrmjQ5EwMKKA',
	authDomain: 'crwn-shop-database.firebaseapp.com',
	databaseURL: 'https://crwn-shop-database.firebaseio.com',
	projectId: 'crwn-shop-database',
	storageBucket: 'crwn-shop-database.appspot.com',
	messagingSenderId: '783522600657',
	appId: '1:783522600657:web:493e55002d4b6261f617f0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
