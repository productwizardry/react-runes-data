import firebase from 'firebase';

const apiKey = '';
const messagingSenderId = '';
const projectId = '';

const config = {
  apiKey,
  messagingSenderId,
  projectId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  storageBucket: `${projectId}.appspot.com`,
};

firebase.initializeApp(config);

export default firebase;
