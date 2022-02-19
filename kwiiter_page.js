const firebaseConfig = {
    apiKey: "AIzaSyCzajjk9xPXC8Spd4Id51wAg_FynoO5hmY",
    authDomain: "kwitter-369cb.firebaseapp.com",
    databaseURL: "https://kwitter-369cb-default-rtdb.firebaseio.com",
    projectId: "kwitter-369cb",
    storageBucket: "kwitter-369cb.appspot.com",
    messagingSenderId: "441958649555",
    appId: "1:441958649555:web:d98b490b4bef86a82bce26"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
