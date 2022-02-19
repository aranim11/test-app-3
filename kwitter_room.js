const firebaseConfig = {
    apiKey: "AIzaSyBP6j_q9Nsuh5pi1uwEcPw854hBCrIUl1g",
    authDomain: "chat-app-15bcc.firebaseapp.com",
    databaseURL: "https://chat-app-15bcc-default-rtdb.firebaseio.com",
    projectId: "chat-app-15bcc",
    storageBucket: "chat-app-15bcc.appspot.com",
    messagingSenderId: "416025600553",
    appId: "1:416025600553:web:0e10af6b670852a679f238"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!!!";


function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({

      purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
 
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
