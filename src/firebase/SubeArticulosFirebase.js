const fetch = require('node-fetch');
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyA5AFrEDzAjl6ocDeqxh0fnt_43bTlPpS8",
  authDomain: "tienda-ecom-b1ad4.firebaseapp.com",
  projectId: "tienda-ecom-b1ad4",
  storageBucket: "tienda-ecom-b1ad4.appspot.com",
  messagingSenderId: "932567607462",
  appId: "1:932567607462:web:fcd768a9aa865bbd4eac67"
});

const db = firebase.firestore();

fetch('https://api.mercadolibre.com/sites/MLA/search?nickname=CHUVAROPA&limit=2')
  .then((data) => data.json())
  .then((data) => {
    const temp = data.results;
    //console.log(temp);
    temp.forEach(function (obj) {
      db.collection('itemstest')
        .add({
          id: obj.id,
          name: obj.title,
          price: obj.price,
          category: obj.category_id,
          stock: obj.available_quantity,
          photo_url: obj.thumbnail,
          thumb: obj.thumbnail,
          description:
            'Ipsum velit voluptate explicabo libero quod nisi Dignissimos provident mollitia dicta laboriosam adipisci Facilis eveniet quidem vel animi qui ut. Explicabo nihil dignissimos magni excepturi distinctio laborum? Perferendis officia magnam?',
          date_update:  new Date().toISOString(),
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    });
  });