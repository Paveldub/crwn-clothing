import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc(obj.title);
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
