import firebase from 'firebase'

var config = {
	apiKey: "AIzaSyAK3F-qRR0AKk3F2qXvBwT4wwKPb2ZmJpU",
	authDomain: "devery-cf4eb.firebaseapp.com",
	databaseURL: "https://devery-cf4eb.firebaseio.com",
	projectId: "devery-cf4eb",
	storageBucket: "devery-cf4eb.appspot.com",
	messagingSenderId: "301035888866"
};

firebase.initializeApp(config);
//Database Reference
export const database = firebase.database();