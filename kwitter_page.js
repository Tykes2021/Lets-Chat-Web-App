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

    room_name = localStorage.getItem("room_name");



function getData()

{
      
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        
      firebase_message_id = childKey;
         
      message_data = childData;



      } });  }); }

getData();

function logout()

{

      localStorage.removeItem("username");

      localStorage.removeItem("room_name");

      window.location = "index.html";

}

function send() 

{ 
      
      msg = document.getElementById("msg").value;
      
      firebase.database().ref(room_name).push({ 
            
            name:username, 
            
            message:msg, 
            
            like:0 
      
      });
      
      document.getElementById("msg").value = ""; 

}
