var firebaseConfig =

{
      apiKey: "AIzaSyCsIbk8MJrvo1AFcPB6_4u4yYPcNirFr_c",

      authDomain: "kwitter-5ec13.firebaseapp.com",

      databaseURL: "https://kwitter-5ec13-default-rtdb.firebaseio.com",

      projectId: "kwitter-5ec13",

      storageBucket: "kwitter-5ec13.appspot.com",

      messagingSenderId: "80668589519",

      appId: "1:80668589519:web:055799eaa66ac0cc9c26ba"

    };
    
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");

    document.getElementById("username").innerHTML = "Welcome " + username + "!";

    function addRoom()

    {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose: "Adding Room Name"

      });

      localStorage.setItem("room_name" , room_name);
      
      window.location = "kwitter_page.html";

    }


function getData() 

{

      

      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;

      console.log("Room Name - " + Room_names);

      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' > # " +Room_names + " </div><hr>";

      document.getElementById("output").innerHTML += row;

      });});}

getData();

function redirectToRoomName(name)

{

      console.log(name);

      localStorage.setItem("room_name" , name);

      window.location = "kwitter_page.html";

}


