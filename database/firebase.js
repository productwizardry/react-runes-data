import axios from 'axios';
import firebase from '@firebase/app';
import '@firebase/database';

const configurationUrl = 'https://merlinpatt.com/slides/react/scripts/configurationData.json';

let initialized = false;

const wrappedFirebase = async () => {
  const response = await axios.get(configurationUrl);

  const {apiKey, messagingSenderId, projectId} = response.data;

  const config = {
    apiKey,
    messagingSenderId,
    projectId,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    storageBucket: `${projectId}.appspot.com`,
  };

  if (! initialized) {
    initialized = true;
    firebase.initializeApp(config);
  }

  return firebase;
}

export default wrappedFirebase;
