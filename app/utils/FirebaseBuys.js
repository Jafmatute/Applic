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
  //console.log("UID", userId());
  let ref = ref_();

  const unsubscribe = ref.onSnapshot((snopShot) => {
    list = [];
    snopShot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });

    callback(list);
    //console.log("list_", list);
  });
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
