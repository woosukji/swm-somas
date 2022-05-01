import { onValue, ref as dbRef, set } from 'firebase/database';
import { uploadBytes, ref as storageRef, deleteObject } from 'firebase/storage';
import Vue from 'vue';
import Vuex from 'vuex';
import { db, storage } from '../plugins/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async signIn(id) {
      const userRef = db.ref(`user/${id}`);
      const userSnapshot = await userRef.once('value');
      const user = userSnapshot.val();
      if (!user) {
        console.log('Not registered user');
        return null;
      }
      console.log('Successfully login');
      return 1;
    },
    async signUp(userId, name, imageUrl) {
      set(dbRef(db, `user/${userId}`), {
        name: `${name}`,
        profile_image: imageUrl,
        tag: { imageUrl },
      });
    },
    async getUsers() {
      const userRef = dbRef(db, 'user/');
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          console.log('no data in user');
          return null;
        }
        return data;
      });
    },
    async getMeetings() {
      const meetingsRef = db.ref('meeting');
      const meetingsSnapshot = await meetingsRef.once('value');
      const meetings = meetingsSnapshot.val();
      if (!meetings) {
        console.log('no data in meetings');
        return null;
      }
      return meetings;
    },
    async getMeetingWithId(meetingId) {
      const meetingRef = db.ref(`meeting/${meetingId}`);
      const meetingSnapshot = await meetingRef.once('value');
      return meetingSnapshot.val();
    },
    async getPosts() {
      const postsRef = db.ref('post/');
      const postsSnapshot = await postsRef.once('value');
      return postsSnapshot.val();
    },
    async getPostWithId(postId) {
      const postRef = db.ref(`post/${postId}`);
      const postSnapshot = await postRef.once('value');
      return postSnapshot.val();
    },
    async getPostIdsWithTag(tag) {
      const postIdRef = db.ref(`tag/${tag}/post`);
      const postIdSnapshot = await postIdRef.once('value');
      return postIdSnapshot.val();
    },
    async uploadProfileImage(imgName, file) {
      const imageRef = storageRef(storage, `public/profile_image/'${imgName}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
      });
      return imageRef.bucket + imageRef.fullPath;
    },
    async uploadPostImage(imgName, file) {
      const imagePath = `public/post_image/${imgName}`;
      const imageRef = storageRef(storage, imagePath);
      uploadBytes(imageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
      });

      return imageRef.bucket + imageRef.fullPath;
    },
    async deleteFile(imgPath) {
      const imageRef = storageRef(storage, imgPath);
      deleteObject(imageRef).then(() => {
        console.log('file deleted successfully');
      }).catch((e) => {
        console.error(e);
      });
    },
  },
  modules: {
  },
});
