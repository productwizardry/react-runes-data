import databaseReference from './databaseReference';

const getAll = async (room, callback) => {
  (await databaseReference(room)).once('value', snapshots => {
    const messages = [];
    snapshots.forEach(snapshot => {
      const message = snapshot.val();
      message.timestamp = new Date(message.time);
      messages.push(message);
    });
    callback(messages);
  });
};

export default getAll;
