import firebase from 'firebase';
import {eventBus} from '../eventBus';

export const getUser = async () => {
    try {
        return await firebase.auth().currentUser;
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant load user :(');
    }
};

export const getPic = async (uid) => {
    const userDir = firebase.storage().ref().child(uid + '/');
    const pic = userDir.child('pic');
    let url;
    try {
        url = await pic.getDownloadURL();
    } catch {
        url = require('../assets/logo.png');
    }
    return url;
};

export const updateUser = async (updUser) => {
    try {
        const currentUser = await firebase.auth().currentUser;
        await currentUser.updateProfile({
            email: updUser.email,
            displayName: updUser.displayName,
        });
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant update user :(');
    }
};

export const uploadPic = async (pic, uid) => {
    try {
        const storageRef = await firebase.storage().ref(uid + '/pic');
        await storageRef.put(pic);
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant upload pic :(');
    }
};