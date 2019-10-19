import firebase from 'firebase';
import router from '../router';
import store from "../store/store";
import {eventBus} from '../eventBus';

export async function getSession() {
    console.log('getSession started');
    const currentUser = await firebase.auth().currentUser;
    // if (!currentUser && router.fullPath !== '/login') {
    //     router.push('/login');
    // }
}

export async function login({email, password}) {
    console.log('login started');
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const currentUser = await firebase.auth().currentUser;
        console.log(currentUser);
        await store.dispatch('setUsername', currentUser.displayName);
        router.push('/');
    } catch (error) {
        eventBus.$emit('snack', 'Credentials are wrong!');
    }
}

export async function register(form) {
    console.log('register started');
    try {
        const response = await firebase.auth()
            .createUserWithEmailAndPassword(form.email, form.password);
        console.log(response);

        const currentUser = await firebase.auth().currentUser;
        console.log(currentUser);

        const addInfo = await currentUser.updateProfile({
            displayName: form.name,
            phoneNumber: form.phone
        });

        const updatedUser = await firebase.auth().onAuthStateChanged(
            async (user) => {
                console.log('user', user);
                await store.dispatch('setUsername', user.displayName);
                router.push('/');
            }
        );
    } catch (err) {
        console.log(err);
        eventBus.$emit('snack', err.message);
    }
}

export async function logout() {
    try {
        await firebase.auth().signOut();
        router.push('/login');
    } catch (error) {
        return error;
    }
}