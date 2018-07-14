import databaseReference from './databaseReference';

const add = async (room, {avatarUrl = '', name = '', text, timestamp}) => {
  (await databaseReference(room)).push().set({
    avatarUrl,
    name,
    room,
    text,
    time: timestamp.getTime(),
  });
};

export default add;
