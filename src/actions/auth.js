import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return() => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

// client id: 436848872047-fve40i141b0m8pkv868ettpnqdummc9q.apps.googleusercontent.com
// secret key: gQ-zb775RSJpXtYRmEUh_5eN