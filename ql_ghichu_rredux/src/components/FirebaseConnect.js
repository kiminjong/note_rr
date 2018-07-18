import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAigS8hD1PO6FUtU8dVB56ODt2HXEsR-4U",
    authDomain: "notereactredux.firebaseapp.com",
    databaseURL: "https://notereactredux.firebaseio.com",
    projectId: "notereactredux",
    storageBucket: "notereactredux.appspot.com",
    messagingSenderId: "868507618627"
  };
  firebase.initializeApp(config);
  export const noteData =  firebase.database().ref('dataForNote/');

//   var data = firebase.database().ref('dataForNote/');
//   data.once('value').then(function(snapshot){  
//   })