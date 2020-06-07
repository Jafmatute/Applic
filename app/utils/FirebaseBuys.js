import firebase from "firebase/app";
import "@firebase/firestore";
import { firebaseApp } from "./FireBase";

export function firebaseBuys(callback) {
  if (!firebase.apps.length) {
    firebaseApp;
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(null, user);
    } else {
      callback(null, null);
    }
  });
}

export function getPerfilVehicle(callback) {
  let ref = ref_();

  ref.get().then((snopShot) => {
    list = [];
    snopShot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });

    callback(list);
  });
}

export function addProfile(list) {
  let ref = ref_();
  ref.add(list);
}

function ref_() {
  return firebase
    .firestore()
    .collection("profile-vehicle")
    .doc(userId())
    .collection("profile");
}
function userId() {
  return firebase.auth().currentUser.uid;
}
