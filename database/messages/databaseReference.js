import firebase from '../firebase';

const databaseReference = (room = '') => firebase.database().ref(`messages/${room}`);

export default databaseReference;
