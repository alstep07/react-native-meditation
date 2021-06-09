import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('users');

export const addUserToFirestore = async (userUid, userName) => {
  try {
    await usersCollection.doc(userUid).set({
      name: userName,
    });

    console.log(`User ${userName} added to firestore`);
  } catch (error) {
    console.error(error);
  }
};
