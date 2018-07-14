import firebase from '../firebase';

const databaseReference = async (room = '') => (await firebase()).database().ref(`messages/${room}`);

export default databaseReference;
