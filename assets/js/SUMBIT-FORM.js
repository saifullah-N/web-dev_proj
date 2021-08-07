  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAfPivUya8HH-3Ge0La3PC_GVhOXKywQnI",
    authDomain: "iqube-48ce6.firebaseapp.com",
    projectId: "iqube-48ce6",
    storageBucket: "iqube-48ce6.appspot.com",
    messagingSenderId: "195350945706",
    appId: "1:195350945706:web:0cc41701b1d1468e60d5d3",
    measurementId: "G-FQ4R4XQC8J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var messagesRef = firebase.database().ref('messages');
form=document.getElementById('myForm').addEventListener('submit',submitForm)
function submitForm(e){
    e.preventDefault()
var Name = getValue('name')
var email = getValue('email')
var subject = getValue('subject')
var message = getValue('message')

saveData(Name,email,subject,message)

document.querySelector('.alert').style.display='block'

setTimeout(()=>(document.querySelector('.alert').style.display='none'),2000)

setTimeout(()=>{
document.querySelector('.alert').style.display='none'
document.getElementById('name').value="";
document.getElementById('email').value="";
document.getElementById('message').value="";
document.getElementById('subject').value="";

},1000)
}
function getValue(id){
   return document.getElementById(id).value
}

function saveData(name,email,subject,message){
    var newMessageRef=messagesRef.push()
    newMessageRef.set(
        {
            name:name,
            email:email,
            subject:subject,
            message:message,
        }
    )
}
