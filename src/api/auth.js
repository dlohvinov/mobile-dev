import firebase from 'firebase';
import router from '../router';
import store from '../store/store';
import {eventBus} from '../eventBus';

export const getSession = async () => {
    await firebase.auth().onAuthStateChanged((currentUser) => {
        if (!currentUser && router.fullPath !== '/login') {
            router.push('/login');
        } else {
            router.push('/');
        }
    });
}

export const login = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const currentUser = await firebase.auth().currentUser;
        await store.dispatch('setUsername', currentUser.displayName);
        router.push('/');
    } catch (error) {
        eventBus.$emit('snack', 'Credentials are wrong!');
    }
}

export const register = async (form) => {
    try {
        const response = await firebase.auth()
            .createUserWithEmailAndPassword(form.email, form.password);

        const currentUser = await firebase.auth().currentUser;

        const addInfo = await currentUser.updateProfile({
            displayName: form.name,
            phoneNumber: form.phone
        });

        await store.dispatch('setUsername', form.name);
        router.push('/');
    } catch (err) {
        eventBus.$emit('snack', err.message);
    }
}

export const logout = async () => {
    try {
        await firebase.auth().signOut();
        router.push('/login');
    } catch (error) {
        eventBus.$emit('snack', err.message);
    }
}