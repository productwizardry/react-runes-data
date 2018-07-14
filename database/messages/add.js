import databaseReference from './databaseReference';

const add = (room, {avatarUrl = '', name = '', text, timestamp}) => {
  databaseReference(room).push().set({
    avatarUrl,
    name,
    room,
    text,
    time: timestamp.getTime(),
  });
};

export default add;
