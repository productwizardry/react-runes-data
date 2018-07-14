import databaseReference from './databaseReference';

let lastRoom = 'general';

const listen = (room, callback) => {
  const MESSAGE_LIMIT = 50;
  databaseReference(lastRoom).off('child_added');
  lastRoom = room;
  databaseReference(room).limitToLast(MESSAGE_LIMIT).on('child_added', data => {
    const {avatarUrl, name, room, text, time} = data.val();
    const message = {
      avatarUrl,
      name,
      room,
      text,
      timestamp: new Date(time),
    };
    callback(message);
  });
};

export default listen;
